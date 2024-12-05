terraform {
  backend "s3" {
    bucket         = "fabioalxk2-terraform-state" # Seu bucket S3
    key            = "terraform/rds-postgres/terraform.tfstate"
    region         = "us-east-1" # Altere para a sua região
    dynamodb_table = "terraform-locks" # Opcional: crie essa tabela para gerenciamento de locks
  }
}

provider "aws" {
  region = "us-east-1" # Altere para a sua região
}

# Security Group para o RDS
resource "aws_security_group" "rds_sg" {
  name        = "rds-security-group"
  description = "Security group for RDS PostgreSQL"

  # Permitir acesso à porta 5432 de qualquer IP (substitua 0.0.0.0/0 por um CIDR específico em produção)
  ingress {
    from_port   = 5432
    to_port     = 5432
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"] # Limite isso para o IP ou range permitido em produção
  }

  # Permitir saída para qualquer destino
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



output "rds_endpoint" {
  description = "RDS Endpoint"
  value       = aws_db_instance.postgres.endpoint
}

output "rds_username" {
  description = "RDS Username"
  value       = aws_db_instance.postgres.username
}

output "rds_name" {
  description = "RDS Database Name"
  value       = aws_db_instance.postgres.db_name
}
