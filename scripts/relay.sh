#!/bin/bash
# Bash Menu Script Example

PS3='Please enter your choice: '
options=("create_wallet" "wallet_balance" "channel_balance" "log_lnd" "log_relay" "quit")
select opt in "${options[@]}"
do
    case $opt in
        "create_wallet")            
            cmd="lncli --lnddir=/relay/.lnd/ --macaroonpath=/relay/.lnd/data/chain/bitcoin/testnet/admin.macaroon newaddress p2wkh"
            echo $cmd
            $cmd
            ;;
        "wallet_balance")
            cmd="lncli --lnddir=/relay/.lnd/ --macaroonpath=/relay/.lnd/data/chain/bitcoin/testnet/admin.macaroon walletbalance"
            echo $cmd
            $cmd
            ;;
        "channel_balance")
            cmd="lncli --lnddir=/relay/.lnd/ --macaroonpath=/relay/.lnd/data/chain/bitcoin/testnet/admin.macaroon channelbalance"
            echo $cmd
            $cmd            
            ;;
        "log_lnd")
            cmd="tail -f /var/log/supervisor/lnd.log"
            echo $cmd
            $cmd            
            ;;
        "log_relay")
            cmd="tail -f /var/log/supervisor/relay.log"
            echo $cmd
            $cmd            
            ;;

        "quit")
            break
            ;;
        *) echo "invalid option $REPLY";;
    esac
done