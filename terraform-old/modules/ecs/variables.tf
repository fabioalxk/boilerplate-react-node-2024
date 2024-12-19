variable "vpc_id" {
  type = string
}

variable "private_subnets" {
  type = list(string)
}

variable "container_image" {
  type = string
}

variable "container_name" {
  type = string
}

variable "container_port" {
  type    = number
  default = 80
}

variable "desired_count" {
  type    = number
  default = 1
}

variable "db_endpoint" {
  type    = string
  default = ""
}
