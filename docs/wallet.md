# Fund Wallet
```
lncli --lnddir=/relay/.lnd/ --macaroonpath=/relay/.lnd/data/chain/bitcoin/testnet/admin.macaroon newaddress p2wkh

lncli --lnddir=/relay/.lnd/ --macaroonpath=/relay/.lnd/data/chain/bitcoin/mainnet/admin.macaroon newaddress p2wkh
```

```
lncli --lnddir=/relay/.lnd/ --macaroonpath=/relay/.lnd/data/chain/bitcoin/testnet/admin.macaroon walletbalance

lncli --lnddir=/relay/.lnd/ --macaroonpath=/relay/.lnd/data/chain/bitcoin/mainnet/admin.macaroon walletbalance

lncli --lnddir=/relay/.lnd/ --macaroonpath=/relay/.lnd/data/chain/bitcoin/mainnet/admin.macaroon channelbalance
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

lncli --lnddir=/relay/.lnd/ --macaroonpath=/relay/.lnd/data/chain/bitcoin/mainnet/admin.macaroon connect 031dd1bd491f30d9c372018bc15639eac174bd49125db418fd7ca5e288435ce1fc@3.88.97.122:9735

lncli --lnddir=/relay/.lnd/ --macaroonpath=/relay/.lnd/data/chain/bitcoin/mainnet/admin.macaroon connect 023202c8e0d1a32cf43fb068fe8507930d5a30a6add62070875bd12c99e2ed2862@52.86.65.63:9735
```

```
lncli --lnddir=/relay/.lnd/ --macaroonpath=/relay/.lnd/data/chain/bitcoin/testnet/admin.macaroon openchannel 0228af7ad42a56c4069a7af192d139747e98283dfc8d5ba8da9884821c3ef2758e --local_amt=15000 --push_amt=5000 --sat_per_byte=1
```

```
# 1
lncli --lnddir=/relay/.lnd/ --macaroonpath=/relay/.lnd/data/chain/bitcoin/mainnet/admin.macaroon connect 033267b4da39deb4411d0e7faedba049608d17888ef7177ab40f6704844c450cb7@52.86.65.63:9735

# 2
lncli --lnddir=/relay/.lnd/ --macaroonpath=/relay/.lnd/data/chain/bitcoin/mainnet/admin.macaroon connect 0355f124523fbd884195cbccb989f937d3a7a8e17bb21ca496435c59f3cd022e65@54.162.44.156:9735

# 0
lncli --lnddir=/relay/.lnd/ --macaroonpath=/relay/.lnd/data/chain/bitcoin/mainnet/admin.macaroon openchannel 033267b4da39deb4411d0e7faedba049608d17888ef7177ab40f6704844c450cb7 --local_amt=75000 --push_amt=10000 --sat_per_byte=35

lncli --lnddir=/relay/.lnd/ --macaroonpath=/relay/.lnd/data/chain/bitcoin/mainnet/admin.macaroon openchannel 0355f124523fbd884195cbccb989f937d3a7a8e17bb21ca496435c59f3cd022e65 --local_amt=75000 --push_amt=10000 --sat_per_byte=35 --min_confs=0
#

lncli --lnddir=/relay/.lnd/ --macaroonpath=/relay/.lnd/data/chain/bitcoin/mainnet/admin.macaroon sendpayment --dest=033267b4da39deb4411d0e7faedba049608d17888ef7177ab40f6704844c450cb7 --final_cltv_delta=10 --amt=20000 --keysend

lncli --lnddir=/relay/.lnd/ --macaroonpath=/relay/.lnd/data/chain/bitcoin/mainnet/admin.macaroon sendpayment --dest=0355f124523fbd884195cbccb989f937d3a7a8e17bb21ca496435c59f3cd022e65 --final_cltv_delta=10 --amt=20000 --keysend


lncli --lnddir=/relay/.lnd/ --macaroonpath=/relay/.lnd/data/chain/bitcoin/mainnet/admin.macaroon wallet bumpfee 7b07f8e925dfc1988276974586fb897b4cfd487f6132dbe8cd9525f90edd8696 --sat_per_byte 150


lncli --lnddir=/relay/.lnd/ --macaroonpath=/relay/.lnd/data/chain/bitcoin/mainnet/admin.macaroon wallet bumpfee  --sat_per_byte 110 7b07f8e925dfc1988276974586fb897b4cfd487f6132dbe8cd9525f90edd8696:0

```

