#!/bin/bash
# Bash Menu Script Example

PS3='Please enter your choice: '
options=("import_lnd.tar.gz" "reveal" "quit")
select opt in "${options[@]}"
do
    case $opt in
        "import_lnd.tar.gz")
            cmd="scp -i ~/.ssh/n2n2 -r root@n2n2-relay-0-staging.n2n2.chat:/relay/lnd.tar.gz ."
            echo $cmd
            $cmd            
            ;;

        "reveal")
            cmd="tar -xzvf lnd.tar.gz .lnd"
            echo $cmd
            $cmd 
            cmd="cp .lnd/tls.cert ."
            echo $cmd
            $cmd   
            cmd="cp .lnd/data/chain/bitcoin/testnet/admin.macaroon ."
            echo $cmd
            $cmd          
            ;;

        "quit")
            break
            ;;
            
        *) 
            PS3="" # this hides the prompt
            echo asdf | select foo in "${options[@]}"; do break; done # dummy select 
            PS3="Please enter your choice: " # this displays the common prompt
            ;;
    esac
done