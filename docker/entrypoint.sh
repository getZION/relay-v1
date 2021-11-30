#!/bin/bash

# turn on bash's job control
set -m

echo "Setting ENV vars..."

# if [ ! -z ${ECS_CONTAINER_METADATA_URI+x} ]; then
#   echo "ECS environment found, setting domain..."
#   export NODE_DOMAIN=$(curl $ECS_CONTAINER_METADATA_URI | echo $(jq -r .DockerName).$NODE_DOMAIN)
# else
#   export UNIQUE_NAME=$(curl --unix-socket /var/run/docker.sock http:/v1.40/containers/$HOSTNAME/json | jq '.Name' --raw-output | cut -c 2-)
#   export NODE_DOMAIN="$UNIQUE_NAME.$NODE_DOMAIN"
# fi

# For dev purposes only
# export NODE_DOMAIN=lvh.me

export NODE_ALIAS=$HOSTNAME

if [[ -z "${PORT}" ]]; then
  export NODE_IP=$NODE_SCHEME://$NODE_DOMAIN
else
  export NODE_IP=$NODE_SCHEME://$NODE_DOMAIN:$PORT
fi

echo $NODE_IP

if [[ ! -f "/var/run/docker.sock" ]]; then
  echo "Docker socket found, pulling LND port..."
  export NODE_LND_PORT=$(curl --unix-socket /var/run/docker.sock http://localhost/containers/$HOSTNAME/json | jq -r '.NetworkSettings.Ports."9735/tcp"[0].HostPort')
fi

echo "Starting supervisor..."
# Start the primary process and put it in the background
/usr/bin/supervisord &

sleep 5

echo "Starting tor..."
supervisorctl start tor

sleep 5

if [[ -f "/relay/.lnd/.lndpwd" ]]; then
  echo "Wallet file found..."
else
  echo "Preparing wallet..."
  WALLET_PASSWORD=$(head /dev/urandom | tr -dc A-Za-z0-9 | head -c20)
  WALLET_PASSPHRASE=$(head /dev/urandom | tr -dc A-Za-z0-9 | head -c20)

  echo $WALLET_PASSWORD >> /relay/.lnd/.lndpwd
  echo $WALLET_PASSPHRASE >> /relay/.lnd/.lndpwd

  expect /relay/docker/create_wallet.sh $WALLET_PASSWORD $WALLET_PASSPHRASE >> /relay/.lnd/.tempseed

  sed -e '2,14d' < /relay/.lnd/.tempseed >> /relay/.lnd/.lndseed

  rm /relay/.lnd/.tempseed

  sleep 5
fi

echo "Starting relay..."
supervisorctl start relay

# now we bring the primary process back into the foreground
# and leave it there
fg %1
