#!/bin/bash
boardID=$(curl -s --request GET --url "https://api.trello.com/1/members/$trelloUsername/boards?key=$key&token=$token" --header 'Accept: application/json' | jq -r ".[] | select(.name == \"$boardName\").id")
# echo "boardID: ${boardID}"
listID=$(curl -s --request GET --url "https://api.trello.com/1/boards/$boardID/lists?key=$key&token=$token" | jq -r ".[] | select(.name == \"$listName\").id")
echo "listID: ${listID}"