# Fund Wallet
```
lncli --lnddir=/relay/.lnd/ --macaroonpath=/relay/.lnd/data/chain/bitcoin/testnet/admin.macaroon newaddress p2wkh
```

```
lncli --lnddir=/relay/.lnd/ --macaroonpath=/relay/.lnd/data/chain/bitcoin/testnet/admin.macaroon walletbalance

lncli --lnddir=/relay/.lnd/ --macaroonpath=/relay/.lnd/data/chain/bitcoin/testnet/admin.macaroon channelbalance
```

## Faucets
https://bitcoinfaucet.uo1.net
https://testnet-faucet.mempool.co


## Send payment
```
lncli --lnddir=/relay/.lnd/ --macaroonpath=/relay/.lnd/data/chain/bitcoin/testnet/admin.macaroon sendpayment --dest=0228af7ad42a56c4069a7af192d139747e98283dfc8d5ba8da9884821c3ef2758e --final_cltv_delta=10 --amt=5 --keysend
```


## Open channel channel
```
lncli --lnddir=/relay/.lnd/ --macaroonpath=/relay/.lnd/data/chain/bitcoin/testnet/admin.macaroon connect 0228af7ad42a56c4069a7af192d139747e98283dfc8d5ba8da9884821c3ef2758e@23.21.38.48:9735
```

```
lncli --lnddir=/relay/.lnd/ --macaroonpath=/relay/.lnd/data/chain/bitcoin/testnet/admin.macaroon openchannel 0228af7ad42a56c4069a7af192d139747e98283dfc8d5ba8da9884821c3ef2758e --local_amt=50000 --push_amt=10000 --sat_per_byte=35
```

