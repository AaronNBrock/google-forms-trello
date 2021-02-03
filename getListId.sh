#!/bin/bash
boardID=$(curl -s --request GET --url "https://api.trello.com/1/members/$trelloUsername/boards?key=$trelloKey&token=$trelloToken" --header 'Accept: application/json' | jq -r ".[] | select(.name == \"$boardName\").id")
echo "boardID: ${boardID}"
listID=$(curl -s --request GET --url "https://api.trello.com/1/boards/$boardID/lists?key=$trelloKey&token=$trelloToken" | jq -r ".[] | select(.name == \"$listName\").id")
echo "listID: ${listID}"