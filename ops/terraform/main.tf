locals {
  org  = "getzion"
  name = "relay"
  env  = ["stag"]
  # env    = ["stag", "prod"]
  region = "us-east-1"

  git_conn_arn = "arn:aws:codestar-connections:us-east-1:533620758524:connection/803285fa-ac22-4ded-87d2-d58fbcb41685"
  git_org      = "getzion"
  git_repo     = format("%s/%s", local.git_org, "relay")
  git_branch = {
    prod = "main"
    stag = "staging"
  }

  common_tags = {
    region    = local.region
    terraform = true
  }
}

terraform {
  # terraform state storage
  backend "s3" {
    bucket         = "zion-terra-state"
    key            = "apps/zion-relay/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "zion-terra-state"
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}

# Configure the AWS Provider
provider "aws" {
  region = "us-east-1"
}
