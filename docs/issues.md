# Reset flow

## DM Issue
1. N2 -> N0 Message 
   1. Key Exchange N2 -> N0 
   2. N0 can not validate the key 
   3. N0 Error: DID NOT FIND SENDER

Cause: 

message didnt work why?

keys did not exchange why?

N2 did not find sender why?

sender was not in teh contacts why?

was not put there why?

1. how do you put send into N0 contacts?

```
use hub 
```

```
do manual

look as sphinx.db on N0 and modify
create new connect N2 - N3 and test DMs
if works

review N2 or N3 sphinx and add to N0 sphinx
```

## SETUP
1. N3 -> N2 pub_key
2. Watch logs for N2 and N3
3. N2 adds nN# pub_key

CONCLUSION the problem is only the connection between the N0 and others

N3 gives N2 key
N2 adds contact 

N0 gives everyone else key and they add the contact

N0 not have a contact_key

does the hub insert the contact key of the N0 into the other nodes?


## SOLUTION
1. hide root (NEED TO DROP INVITE SYSTEM)
2. hardcode contact_key into the app and reset current nodes sphinx.db (NEED TO DROP INVITE SYSTEM)
3. develop the hub
   