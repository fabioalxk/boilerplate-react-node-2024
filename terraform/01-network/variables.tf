variable "aws_region" {
  description = "AWS region where thge Network resoures will be deployed like us-east-1"
  type        = string
  default     = "us-east-1"
}

variable "environment" {
  description = "deployment environment name"
  type        = string
  default     = "dev"
}
