resource "aws_security_group" "rds_sg" {
  name        = "rds-security-group"
  description = "Security group for RDS PostgreSQL"

  lifecycle {
    prevent_destroy = true
  }

  ingress {
    from_port   = 5432
    to_port     = 5432
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

resource "aws_db_instance" "postgres" {
  allocated_storage       = 20
  engine                  = "postgres"
  engine_version          = "16.1"
  instance_class          = "db.t3.micro"
  db_name                 = "mydb"
  username                = "myuser"
  password                = "mypassword"
  parameter_group_name    = "default.postgres16"
  publicly_accessible     = true
  skip_final_snapshot     = true
  vpc_security_group_ids  = [aws_security_group.rds_sg.id]
}

# use modules to create everything for me
# cloudposse => label module => generic => pass information and use for naming => provide modules for free
