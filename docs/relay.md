# n2n2-relay

### Bash
```
ssh -i ~/.ssh/n2n2 ubuntu@n2n2-relay-1.n2n2.chat
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
tail -f /var/log/supervisor/lnd.log
tail -f /var/log/supervisor/relay.log
```

## Code
```
cat /relay/connection_string.txt 
```

## Lightning

### Fund Wallet
```
lncli --lnddir=/relay/.lnd/ --macaroonpath=/relay/.lnd/data/chain/bitcoin/testnet/admin.macaroon newaddress p2wkh
```
https://testnet-faucet.mempool.co
https://bitcoinfaucet.uo1.net

```
lncli --lnddir=/relay/.lnd/ --macaroonpath=/relay/.lnd/data/chain/bitcoin/testnet/admin.macaroon walletbalance
```