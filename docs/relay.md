# n2n2-relay

### Bash
```
ssh -i ~/.ssh/n2n2 ubuntu@relay-0-staging.n2n2.chat
ssh -i ~/.ssh/n2n2 ubuntu@relay-0.n2n2.chat
sudo -s
docker exec -it $(docker ps --latest --quiet) bash
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
scp -i ~/.ssh/n2n2 -r ubuntu@relay-0.n2n2.chat:/relay/.lnd .

```

## Lightning

```
lncli --lnddir=/relay/.lnd/ --macaroonpath=/relay/.lnd/data/chain/bitcoin/testnet/admin.macaroon getinfo

lncli --lnddir=/relay/.lnd/ --macaroonpath=/relay/.lnd/data/chain/bitcoin/mainnet/admin.macaroon getinfo
```