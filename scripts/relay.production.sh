#!/bin/bash
# Bash Menu Script Example

PS3='Please enter your choice: '
options=("create_wallet" "wallet_balance" "channel_balance" "list_channels" "log_lnd" "log_relay" "connection_string" "getinfo" "quit")
select opt in "${options[@]}"
do
    case $opt in
        "create_wallet")            
            cmd="lncli --lnddir=/relay/.lnd/ --macaroonpath=/relay/.lnd/data/chain/bitcoin/mainnet/admin.macaroon newaddress p2wkh"
            echo $cmd
            $cmd
            ;;
        "wallet_balance")
            cmd="lncli --lnddir=/relay/.lnd/ --macaroonpath=/relay/.lnd/data/chain/bitcoin/mainnet/admin.macaroon walletbalance"
            echo $cmd
            $cmd
            ;;
        "channel_balance")
            cmd="lncli --lnddir=/relay/.lnd/ --macaroonpath=/relay/.lnd/data/chain/bitcoin/mainnet/admin.macaroon channelbalance"
            echo $cmd
            $cmd            
            ;;
        "list_channels")
            cmd="lncli --lnddir=/relay/.lnd/ --macaroonpath=/relay/.lnd/data/chain/bitcoin/mainnet/admin.macaroon listchannels"
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
        "connection_string")
            cmd="cat /relay/connection_string.txt "
            echo $cmd
            $cmd            
            ;;
        "getinfo")
            cmd="lncli --lnddir=/relay/.lnd/ --macaroonpath=/relay/.lnd/data/chain/bitcoin/mainnet/admin.macaroon getinfo"
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