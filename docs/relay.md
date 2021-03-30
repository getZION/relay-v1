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
tail -f /var/log/supervisor/relay.log
tail -f /var/log/supervisor/lnd.log
```

## Code
```
cat /relay/connection_string.txt 
```

## Lightning

```
lncli --lnddir=/relay/.lnd/ --macaroonpath=/relay/.lnd/data/chain/bitcoin/testnet/admin.macaroon getinfo
```

## Open channel Channel
```
lncli --lnddir=/relay/.lnd/ --macaroonpath=/relay/.lnd/data/chain/bitcoin/testnet/admin.macaroon connect 0317dd32b94d37fa0ee0a481f30cd6090e7b28e593937e5b9446a30cc534f87c07@34.196.0.95:9735
```

```
lncli --lnddir=/relay/.lnd/ --macaroonpath=/relay/.lnd/data/chain/bitcoin/testnet/admin.macaroon openchannel 0317dd32b94d37fa0ee0a481f30cd6090e7b28e593937e5b9446a30cc534f87c07 --local_amt=20000 --push_amt=5000 --sat_per_byte=35
```

```
lncli --lnddir=/relay/.lnd/ --macaroonpath=/relay/.lnd/data/chain/bitcoin/testnet/admin.macaroon sendpayment --dest=0317dd32b94d37fa0ee0a481f30cd6090e7b28e593937e5b9446a30cc534f87c07 --final_cltv_delta=10 --amt=5 --keysend
```