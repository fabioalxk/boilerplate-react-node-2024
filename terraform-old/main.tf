terraform {
  required_version = ">= 1.0"
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  backend "s3" {
    bucket         = "fabioalxk2-terraform-state"
    key            = "terraform/state/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-locks"
  }
}

provider "aws" {
  region = "us-east-1"
}

module "vpc" {
  source = "./modules/vpc"
  name   = "my-vpc"
  cidr   = "10.0.0.0/16"
}

module "rds" {
  source            = "./modules/rds"
  vpc_id            = module.vpc.vpc_id
  private_subnets   = module.vpc.private_subnets
  db_username       = "myuser"
  db_password       = "mypassword"
  db_name           = "mydb"
}

module "ecs" {
  source            = "./modules/ecs"
  vpc_id            = module.vpc.vpc_id
  private_subnets   = module.vpc.private_subnets
  container_image   = "nginx:latest" # Exemplo de imagem simples do Docker Hub
  container_name    = "my-ecs-app"
  container_port    = 80
  desired_count     = 2
  # Caso queira ligar o ECS no RDS, você pode passar o endpoint do DB por variável
  db_endpoint       = module.rds.db_endpoint
}

output "rds_endpoint" {
  value = module.rds.db_endpoint
}

output "ecs_service_url" {
  value = module.ecs.alb_dns_name
}
