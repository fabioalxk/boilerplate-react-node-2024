module "ecs_cluster" {
  source  = "cloudposse/ecs-cluster/aws"
  version = "0.9.0"
  name    = "${var.container_name}-cluster"
}

resource "aws_iam_role" "ecs_task_execution" {
  name = "${var.container_name}-execution-role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [{
      Effect    = "Allow",
      Principal = { Service = "ecs-tasks.amazonaws.com" },
      Action    = "sts:AssumeRole"
    }]
  })
}

resource "aws_iam_role_policy_attachment" "ecs_task_execution_policy" {
  role       = aws_iam_role.ecs_task_execution.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}

resource "aws_iam_role" "ecs_task" {
  name = "${var.container_name}-task-role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [{
      Effect    = "Allow",
      Principal = { Service = "ecs-tasks.amazonaws.com" },
      Action    = "sts:AssumeRole"
    }]
  })
}

resource "aws_security_group" "alb_sg" {
  name        = "${var.container_name}-alb-sg"
  description = "Allow inbound HTTP to ALB"
  vpc_id      = var.vpc_id

  ingress {
    from_port   = var.container_port
    to_port     = var.container_port
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_lb" "alb" {
  name               = "${var.container_name}-alb"
  load_balancer_type = "application"
  security_groups    = [aws_security_group.alb_sg.id]
  subnets            = var.private_subnets
}

resource "aws_lb_target_group" "alb_tg" {
  name        = "${var.container_name}-tg"
  port        = var.container_port
  protocol    = "HTTP"
  vpc_id      = var.vpc_id
  target_type = "ip"
}

resource "aws_lb_listener" "alb_listener" {
  load_balancer_arn = aws_lb.alb.arn
  port              = var.container_port
  protocol          = "HTTP"
  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.alb_tg.arn
  }
}

module "ecs_alb_service_task" {
  source  = "cloudposse/ecs-alb-service-task/aws"
  version = "0.76.1"

  name                      = var.container_name
  ecs_cluster_arn           = module.ecs_cluster.cluster_arn
  vpc_id                    = var.vpc_id
  subnets                   = var.private_subnets
  listener_arn              = aws_lb_listener.alb_listener.arn

  container_definition_json = jsonencode([
    {
      "name": var.container_name,
      "image": var.container_image,
      "essential": true,
      "portMappings": [{
        "containerPort": var.container_port,
        "hostPort": var.container_port
      }],
      "memory": 512,
      "cpu": 256
    }
  ])

  desired_count           = var.desired_count
  task_execution_role_arn = aws_iam_role.ecs_task_execution.arn
  task_role_arn           = aws_iam_role.ecs_task.arn
}
