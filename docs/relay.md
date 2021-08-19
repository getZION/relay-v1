# zion-relay

### Bash
```
ssh -i ~/.ssh/zion ubuntu@box-1.n2n2.chat
sudo -s
docker exec -it $(docker ps --latest --quiet) bash
```

## Docker

```
docker-compose --env-file .env up 
docker-compose -f docker-compose-testnet.yml up -d
```

## Reset 
```
supervisorctl stop relay
cd /relay && rm -rf sphinx.db && touch sphinx.db 
supervisorctl start relay
```

## Logs
```
tail -f /var/log/supervisor/relay.log
tail -f /var/log/supervisor/lnd.log
```

## Code
```
cat /relay/connection_string.txt 
```

## Backup
```
scp -i ~/.ssh/zion -r ubuntu@box-1.n2n2.chat:/relay/.lnd .

```

## Lightning

```
lncli --lnddir=/relay/.lnd/ --macaroonpath=/relay/.lnd/data/chain/bitcoin/testnet/admin.macaroon getinfo

lncli --lnddir=/relay/.lnd/ --macaroonpath=/relay/.lnd/data/chain/bitcoin/mainnet/admin.macaroon getinfo
```

## Tor

```
https://sachsenhofer.io/setup-tor-docker-container/
```