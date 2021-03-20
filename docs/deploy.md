# Deploying n2n2-relay

## Docker
### docker compose
```
docker-compose build
```

## Stack DevOps/CI
Stack is currently deployed via terraform.


### Terrafom Node
```
cd terraform/
terraform apply
terraform show
terraform destruct
```

### Terraform Docker
```
cd terraform.docker/
terraform apply
terraform show
terraform destruct

ssh -i ~/.ssh/n2n2 ec2-user@ec2-18-205-113-254.compute-1.amazonaws.com

sudo -s
docker ps -q | xargs -L 1 docker logs -f

docker exec -it “container-id” /bin/sh
cat /var/log/supervisor/lnd.log
cat /var/log/supervisor/relay.log
```