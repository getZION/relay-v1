# N2N2 Relay Cluster


## Prerequisites
```
brew install ansible
pip install boto boto3 botocore
```

```
cd ops.ansible
ansible-playbook -i inventory/hosts playbooks/start-cluster.yml
ansible-playbook -i inventory/hosts playbooks/terminate-cluster.yml
```

## Bash
```
ssh -i ~/.ssh/n2n2 ubuntu@ec2-23-21-226-144.compute-1.amazonaws.com 
```