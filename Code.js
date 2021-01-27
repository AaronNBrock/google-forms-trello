const key = "<your-key>"
const token = "<your-token>"
const idList = "<id-list>"

function createURL(baseurl, obj) {
  return baseurl + Object.keys(obj).reduce(function (p, e, i) {
    return p + (i == 0 ? "?" : "&") +
      (Array.isArray(obj[e]) ? obj[e].reduce(function (str, f, j) {
        return str + e + "=" + encodeURIComponent(f) + (j != obj[e].length - 1 ? "&" : "")
      }, "") : e + "=" + encodeURIComponent(obj[e]));
  }, "");
}

function onSubmit(e) {

  Logger.log("onSubmit %s", JSON.stringify(e));

  var url = createURL(
    'https://api.trello.com/1/cards',
    {
      key: key,
      token: token,
      idList: idList,
      name: e.namedValues['Name'][0],
      desc: e.namedValues['Description'][0],
    }
  )

  var options = {
    'method': 'post',
  };
  UrlFetchApp.fetch(url, options);
}

function manualTest() {
  var event = {
    namedValues: {
      Name: ['Test Name'],
      Description: ['Test Description']
    }
  }
  onSubmit(event)
}
