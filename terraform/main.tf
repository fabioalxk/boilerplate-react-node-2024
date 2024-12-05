terraform {
  backend "local" {
    path = "terraform.tfstate"
  }
}

provider "aws" {
  region = "us-east-1"
}

# Rede e Subnets básicas
resource "aws_security_group" "fabioalxk2_sg" {
  name        = "fabioalxk2_sg"
  description = "Allow all inbound traffic"
  
  ingress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_subnet" "fabioalxk2_subnet" {
  vpc_id     = "default"
  cidr_block = "10.0.1.0/24"
}

# Cluster ECS
resource "aws_ecs_cluster" "fabioalxk2_cluster" {
  name = "fabioalxk2-cluster"
}

# Banco de Dados RDS PostgreSQL
resource "aws_db_instance" "fabioalxk2_postgres" {
  allocated_storage    = 20
  engine               = "postgres"
  engine_version       = "13.4"
  instance_class       = "db.t3.micro"
  db_name              = "mydb"
  username             = "myuser"
  password             = "mypassword"
  publicly_accessible  = true
  skip_final_snapshot  = true
  vpc_security_group_ids = [aws_security_group.fabioalxk2_sg.id]
}



# Configuração de uma task do ECS para o Node.js server
resource "aws_ecs_task_definition" "fabioalxk2_node_task" {
  family                   = "fabioalxk2-node-task"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = "256"
  memory                   = "512"

  container_definitions = jsonencode([
    {
      name        = "nodejs-server"
      image       = "meu-registry/node-server:latest"
      portMappings = [
        {
          containerPort = 3000
          hostPort      = 3000
        }
      ]
    }
  ])
}

# Configuração de um service ECS para o Node.js server
resource "aws_ecs_service" "fabioalxk2_node_service" {
  name            = "fabioalxk2-node-service"
  cluster         = aws_ecs_cluster.fabioalxk2_cluster.id
  task_definition = aws_ecs_task_definition.fabioalxk2_node_task.arn
  desired_count   = 1

  network_configuration {
    subnets         = [aws_subnet.fabioalxk2_subnet.id]
    security_groups = [aws_security_group.fabioalxk2_sg.id]
  }
}

# Configuração de uma task do ECS para o React client
resource "aws_ecs_task_definition" "fabioalxk2_react_task" {
  family                   = "fabioalxk2-react-task"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = "256"
  memory                   = "512"

  container_definitions = jsonencode([
    {
      name        = "react-client"
      image       = "meu-registry/react-client:latest"
      portMappings = [
        {
          containerPort = 3000
          hostPort      = 3000
        }
      ]
    }
  ])
}

# Configuração de um service ECS para o React client
resource "aws_ecs_service" "fabioalxk2_react_service" {
  name            = "fabioalxk2-react-service"
  cluster         = aws_ecs_cluster.fabioalxk2_cluster.id
  task_definition = aws_ecs_task_definition.fabioalxk2_react_task.arn
  desired_count   = 1

  network_configuration {
    subnets         = [aws_subnet.fabioalxk2_subnet.id]
    security_groups = [aws_security_group.fabioalxk2_sg.id]
  }
}
