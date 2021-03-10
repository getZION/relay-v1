resource "aws_elastic_beanstalk_application" "fetch" {
  name        = format("%s-%s", local.org, local.name)
  description = ""
  tags        = local.common_tags
}

resource "aws_elastic_beanstalk_environment" "fetch" {
  count = length(local.env)

  name                = format("%s-%s-%s", local.env[count.index], local.org, local.name)
  cname_prefix        = format("%s-%s-%s", local.env[count.index], local.org, local.name)
  application         = aws_elastic_beanstalk_application.fetch.name
  tier                = "WebServer"
  solution_stack_name = "64bit Amazon Linux 2 v3.2.5 running Docker"

  # vpc
  setting {
    namespace = "aws:ec2:vpc"
    name      = "ELBScheme"
    value     = "public"
  }
  # setting {
  #   namespace = "aws:ec2:vpc"
  #   name      = "VPCId"
  #   value     = "vpc-xxxxxxxx"
  # }
  # setting {
  #   namespace = "aws:ec2:vpc"
  #   name      = "Subnets"
  #   value     = "subnet-xxxxxxxx"
  # }
  # setting {
  #   namespace = "aws:ec2:vpc"
  #   name      = "AssociatePublicIpAddress"
  #   value     = true
  # }

  # ec2
  setting {
    namespace = "aws:ec2:instances"
    name      = "InstanceTypes"
    value     = "t3.small,t2.small"
  }
  # setting {
  #   namespace = "aws:ec2:instances"
  #   name      = "EnableSpot"
  #   value     = false
  # }
  # setting {
  #   namespace = "aws:ec2:instances"
  #   name      = "SpotMaxPrice"
  #   value     = false
  # }

  # autoscaling
  setting {
    namespace = "aws:autoscaling:launchconfiguration"
    name      = "EC2KeyName"
    value     = "n2n2"
  }
  setting {
    namespace = "aws:autoscaling:launchconfiguration"
    name      = "IamInstanceProfile"
    value     = "aws-elasticbeanstalk-ec2-role"
  }

  # health
  # setting {
  #   namespace = "aws:elasticbeanstalk:application"
  #   name      = "Application Healthcheck URL"
  #   value     = "/"
  # }

  # loadbalancer
  setting {
    namespace = "aws:elasticbeanstalk:environment"
    name      = "EnvironmentType"
    value     = "LoadBalanced"
  }
  setting {
    namespace = "aws:elasticbeanstalk:environment"
    name      = "LoadBalancerType"
    value     = "application"
  }
  setting {
    namespace = "aws:elasticbeanstalk:environment"
    name      = "LoadBalancerIsShared"
    value     = false
  }

  # Add environment variables if provided
  dynamic "setting" {
    for_each = var.env_vars[local.env[count.index]]
    content {
      namespace = "aws:elasticbeanstalk:application:environment"
      name      = setting.key
      value     = setting.value
      resource  = ""
    }
  }

  tags = merge(
    { env = local.env[count.index] },
    local.common_tags
  )
}

variable "env_vars" {
  type        = map(map(string))
  default     = {}
  description = "Map of custom ENV variables to be provided to Elstic Beanstalk"
}
