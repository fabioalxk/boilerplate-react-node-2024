# https://developer.hashicorp.com/terraform/language/backend/s3
provider "aws" {
  region = "us-east-1"

  default_tags {
    tags = {
      Project    = "Curso AWS ECS Fargate com Terraform"
      Component  = "Remote State"
      CreatedAt  = "2024-11-12"
      ManagedBy  = "Terraform"
      Owner      = "Fabio Alexandrino"
      Repository = "https://github.com/fabioalxk/boilerplate-react-node-2024"
    }
  }
}
