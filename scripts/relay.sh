#!/bin/bash
# Bash Menu Script Example


function_menu_logs () {
  PS3='Please enter your choice: '
    options=("log_lnd" "log_relay" "log_tor" "quit")
    select opt in "${options[@]}"
    do
        case $opt in
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
            "log_tor")
                cmd="tail -f /var/log/supervisor/tor.log"
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
}

function_menu_main () {
  PS3='Please enter your choice: '
    options=("create_wallet" "wallet_balance" "channel_balance" "list_channels" "logs" "connection_string" "getinfo" "check_tor" "quit")
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
            "list_channels")
                cmd="lncli --lnddir=/relay/.lnd/ --macaroonpath=/relay/.lnd/data/chain/bitcoin/testnet/admin.macaroon listchannels"
                echo $cmd
                $cmd            
                ;;
            "logs")
                function_menu_logs       
                ;;
            "connection_string")
                cmd="cat /relay/connection_string.txt "
                echo $cmd
                $cmd            
                ;;
            "getinfo")
                cmd="lncli --lnddir=/relay/.lnd/ --macaroonpath=/relay/.lnd/data/chain/bitcoin/testnet/admin.macaroon getinfo"
                echo $cmd
                $cmd            
                ;;
                
            "check_tor")
                cmd="curl --socks5 localhost:9050 --socks5-hostname localhost:9050 -s https://check.torproject.org/ | cat | grep -m 1 Congratulations | xargs"
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
}

function_menu_main