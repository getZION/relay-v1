# Tenants

1. connect.ts line 78 hardcoded info

 
``` tenants-0s => 0-s (using on-chain funds)
lncli --lnddir=/relay/.lnd/ --macaroonpath=/relay/.lnd/data/chain/bitcoin/testnet/admin.macaroon connect 0228af7ad42a56c4069a7af192d139747e98283dfc8d5ba8da9884821c3ef2758e@23.21.38.48:9735

lncli --lnddir=/relay/.lnd/ --macaroonpath=/relay/.lnd/data/chain/bitcoin/testnet/admin.macaroon openchannel 0228af7ad42a56c4069a7af192d139747e98283dfc8d5ba8da9884821c3ef2758e --local_amt=40000 --push_amt=10000 --sat_per_byte=1

``` 0-s => voltage
lncli --lnddir=/relay/.lnd/ --macaroonpath=/relay/.lnd/data/chain/bitcoin/testnet/admin.macaroon connect 02ef9b1adcead1dbe8a6949923a85b3267d6bbeb59a9531cbfb3a8d2ec4c611911@n2n2-lnd.t.voltageapp.io:9375
```

are there issues with the meme server???
how to create tenants

turn on proxy : set environment variables