
# codepipeline role
resource "aws_iam_role" "fetch" {
  name               = format("codepipeline-%s-%s", local.org, local.name)
  assume_role_policy = data.aws_iam_policy_document.fetch_sts.json
  tags               = local.common_tags
}
data "aws_iam_policy_document" "fetch_sts" {
  statement {
    effect = "Allow"
    actions = [
      "sts:AssumeRole",
    ]

    principals {
      type        = "Service"
      identifiers = ["codepipeline.amazonaws.com"]
    }
  }
}
resource "aws_iam_role_policy" "fetch" {
  name = format("codepipeline-policy-%s-%s", local.org, local.name)
  role = aws_iam_role.fetch.id

  policy = data.aws_iam_policy_document.fetch.json
}
resource "aws_iam_role_policy_attachment" "fetch" {
  role       = aws_iam_role.fetch.name
  policy_arn = "arn:aws:iam::aws:policy/AWSElasticBeanstalkFullAccess"
}
data "aws_iam_policy_document" "fetch" {
  statement {
    effect = "Allow"
    actions = [
      "codestar-connections:UseConnection",
    ]

    resources = [
      local.git_conn_arn
    ]
  }
}
