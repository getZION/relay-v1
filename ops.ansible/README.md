# N2N2 Relay Cluster


## Prerequisites
```
brew install ansible
pip install boto boto3 botocore
```

## Instructions
```
cd ops.ansible
ansible-playbook -i inventory/hosts playbooks/start-cluster.yml
ansible-playbook -i inventory/hosts playbooks/terminate-cluster.yml
```

## Bash
```
ssh -i ~/.ssh/n2n2 ubuntu@n2n2-relay-1.n2n2.chat
```