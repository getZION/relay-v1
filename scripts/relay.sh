#!/bin/bash
# Bash Menu Script Example


function_menu_lncli () {
  PS3='Please enter your choice: '
    options=("getinfo" "create_wallet" "wallet_balance" "channel_balance"  "list_channels" "quit")
    select opt in "${options[@]}"
    do
        case $opt in
            "getinfo")
                cmd="lncli --lnddir=/relay/.lnd/ --macaroonpath=/relay/.lnd/data/chain/bitcoin/mainnet/admin.macaroon getinfo"
                echo $cmd
                $cmd            
                ;;
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
    options=("lnclie" "logs" "connection_string" "check_tor" "quit")
    select opt in "${options[@]}"
    do
        case $opt in
            "lncli")
                function_menu_lncli     
                ;;

            "logs")
                function_menu_logs       
                ;;

            "connection_string")
                cmd="cat /relay/connection_string.txt "
                echo $cmd
                $cmd            
                ;;
                
            "check_tor")
                cmd="curl --socks5 localhost:9050 --socks5-hostname localhost:9050 -s https://check.torproject.org/ | cat | grep -m 1 Congratulations | xargs"
                echo $cmd
                $cmd            
                ;;

            "reset_sphinx_db")
                cmd="rm -rf sphinx.db"
                echo $cmd
                $cmd
                cmd="touch sphinx.db"
                echo $cmd
                $cmd  
                cmd="supervisorctl restart relay"
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