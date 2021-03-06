# Deploying zion-relay

## Stack DevOps/CI
Stack is currently deployed to AWS via ansible.

## Stack DevOps
To start see [Ansible](../ops.ansible/README.md)

## Deprecated Flows

### Terraform Docker
```
cd terraform.docker/
terraform apply
terraform show
terraform destruct

sudo -s
docker ps -q | xargs -L 1 docker logs -f

docker exec -it “container-id” /bin/sh
docker exec -it $(docker ps --latest --quiet) bash
docker kill $(docker ps -q)

tail -f /var/log/supervisor/lnd.log
tail -f /var/log/supervisor/relay.log
```

```
docker build -t relay -f Dockerfile.zion.lndrelay .
docker-compose up
```

```
touch /voltage/sphinx.db

docker build -t relay .
docker tag relay:latest relay:staging
docker run relay:latest

docker-compose -f docker-compose.zion.yml up
docker-compose -f docker-compose.zion.yml up -d
```

command=sh -c 'lnd --lnddir=/relay/.lnd/ --alias=$HOSTNAME --tlsextradomain=$NODE_DOMAIN --externalip=$NODE_DOMAIN'
