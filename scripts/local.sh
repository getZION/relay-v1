#!/bin/bash
# Bash Menu Script Example

PS3='Please enter your choice: '
options=("pull_backup" "push_backup" "build" "quit")
select opt in "${options[@]}"
do
    case $opt in
        "pull_backup")
            cmd="scp -i ~/.ssh/zion -r ubuntu@box-1.n2n2.chat:/relay/export.tar.gz ."
            echo $cmd
            $cmd            
            ;;

        "push_backup")
            cmd="scp -i ~/.ssh/zion -r ./backups/backup_zion.tar.gz ubuntu@box-1.n2n2.chat:/relay/import.tar.gz"
            echo $cmd
            $cmd            
            ;;

        "build")
            cmd="docker build -t relay -f Dockerfile.mainnet ."
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