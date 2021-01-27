# Google Forms <-> Trello

This is an example of using Google App Scripts to create Trello cards when a Google Form is submitted.

## Prereqs
* install `curl`
* (optional) install `jq`

## Setup (Manual)
### Configure Trello Access
1. Follow [these instructions](https://developer.atlassian.com/cloud/trello/guides/rest-api/api-introduction/) here to create a `key` and `token`.
1. Update the `key` and `token` at the top of `Code.js` file

### Get list ID
1. Run the following command replacing:
    ```bash
    key="<your-key>" \
    token="<your-token>" \
    trelloUsername="<you-trello-username>" \
    boardName="<board-name>" \
    listName="<list-name>" \
    ./getListId.sh
    ```
    (script from [here](https://stackoverflow.com/a/65913616/7607701))
1. Update the `listId` at the top of `Code.js` file

### Create Google Form, Spreadsheet & App Script
1. Create a new blank form at [forms.google.com](http://forms.google.com/)
1. Create a question named "Name" and a question named "Description"
1. Navigate to the `Reponses` tab and press the Google Slides button, and create a new spreadsheet.
1. Once the spreadsheet opens, go to "Tools" > "Script Editor"


### Configure App Script
1. Copy the entirety of `Code.js` into `Code.gs`
1. On the left select "Triggers" > "+ Add Trigger" and fill in the following:
    * "Choose which function to run": `onSubmit`
    * "Choose which deployment should run": `Head`
    * "Select event source": `From spreadsheet`
    * "Select event type": `On form submit`
    * "Failure notifications settings": Select as desired
1. When you press "Save" complete the a google Oauth permissions popup.
  (**Note:** You will see a "Google hasn't verified this app" warning, from which you'll have to select "Advanced" then "Go to Untitled project (unsafe)")


### Verify it works
1. Submit a new response to your form
1. Check to make sure the card was created :)

## Setup (Automated)
Still TBH, something to do with Something to do with: [`clasp`](https://github.com/google/clasp)