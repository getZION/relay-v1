# Relay backup instructions

```
# ssh into the node 

./scripts/docker.sh

# menu -> bash 
## tar .lnd && sphinx.db
exit

./scripts/docker.sh
# menu -> pull_backup
exit

./scripts/local.sh
## update node endpoint 
# menu -> pull_backup

# rename backup.tar.gz to backup_<NODE_ALIAS>.tar.gz
```