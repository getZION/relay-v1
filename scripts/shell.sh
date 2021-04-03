# HOST=ubuntu@n2n2-relay-0-staging.n2n2.chat
# ssh -i ~/.ssh/n2n2 $HOST bash -c "'
# sudo -s
# # docker exec -it $(docker ps --latest --quiet) bash
# docker ps
# cd /relay/scripts
# '"
HOST=ubuntu@n2n2-relay-0-staging.n2n2.chat
ssh -i ~/.ssh/n2n2 $HOST <<'ENDSSH'
sudo -s
docker exec -it $(docker ps --latest --quiet) bash
ENDSSH

# ssh -t $HOST sudo t
# cd /relay/scripts