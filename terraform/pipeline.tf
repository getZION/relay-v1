
resource "aws_codepipeline" "fetch" {
  count = length(local.env)

  name     = format("%s-%s-%s", local.env[count.index], local.org, local.name)
  role_arn = aws_iam_role.fetch.arn

  artifact_store {
    location = data.aws_s3_bucket.default_codepipeline.bucket
    type     = "S3"
  }

  stage {
    name = "Source"

    action {
      name             = "Source"
      category         = "Source"
      owner            = "AWS"
      provider         = "CodeStarSourceConnection"
      version          = "1"
      output_artifacts = ["1"]

      configuration = {
        ConnectionArn        = local.git_conn_arn
        FullRepositoryId     = local.git_repo
        BranchName           = local.git_branch[local.env[count.index]]
        OutputArtifactFormat = "CODE_ZIP"
      }
    }
  }

  stage {
    name = "Deploy"

    action {
      name            = "Deploy"
      category        = "Deploy"
      owner           = "AWS"
      provider        = "ElasticBeanstalk"
      version         = "1"
      input_artifacts = ["1"]

      configuration = {
        ApplicationName = format("%s-%s", local.org, local.name)
        EnvironmentName = format("%s-%s-%s", local.env[count.index], local.org, local.name)
      }
    }
  }

  tags = merge(
    { env = local.env[count.index] },
    local.common_tags
  )
}

# s3 default codepipeline bucket
data "aws_s3_bucket" "default_codepipeline" {
  bucket = "codepipeline-n2n2"
}
