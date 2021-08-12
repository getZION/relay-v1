

## Purge tribes database
DELETE FROM public.tribes WHERE owner_pub_key != '0228af7ad42a56c4069a7af192d139747e98283dfc8d5ba8da9884821c3ef2758e';

## Portals
http://n2n2-relay-1-staging.n2n2.chat:3000/connect
http://n2n2-relay-2-staging.n2n2.chat:3000/connect
http://n2n2-relay-3-staging.n2n2.chat:3000/connect
http://n2n2-relay-4-staging.n2n2.chat:3000/connect
http://n2n2-relay-5-staging.n2n2.chat:3000/connect


## Reset Procedure
```
1. purge all relays / update all relays to tenants branch

2. add CONNECT_UI
3. NODE 4 creates (Sports, Travel, Fashion communities)
4. NODE 4 posts pictures in each
5. NODE 2 joins and looks at the feed


cd /relay 

./scripts/docker.sh
kill
export CONNECT_UI=true
start_testnet

./scripts/docker.sh

git pull && git checkout feature/tenants

supervisorctl stop relay && rm -rf sphinx.db && touch sphinx.db && supervisorctl start relay
```

```
ssh -i ~/.ssh/n2n2 root@n2n2-relay-1-staging.n2n2.chat - done
ssh -i ~/.ssh/n2n2 root@n2n2-relay-2-staging.n2n2.chat - done
ssh -i ~/.ssh/n2n2 root@n2n2-relay-3-staging.n2n2.chat - done

ssh -i ~/.ssh/n2n2 root@n2n2-relay-4-staging.n2n2.chat
ssh -i ~/.ssh/n2n2 root@n2n2-relay-5-staging.n2n2.chat
```

## Tests

N2 - iPhone 11 Pro

1. N2 -> N3
   1. N3 preview [Arts Community]
   2. N3 join [Arts Community]
   3.  N3 preview [Arts Community]
2. N3
   1. Create community [Skateboarding]
   2. Create community [Music]
   3. Review feed
3. N2
   1. Review Feed
4. N1 -> (N2, N3)
   1. Review Feed


