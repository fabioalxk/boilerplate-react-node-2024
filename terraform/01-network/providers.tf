# https://developer.hashicorp.com/terraform/language/backend/s3
provider "aws" {
  region = var.aws_region

  default_tags {
    tags = local.common_tags
  }
}
