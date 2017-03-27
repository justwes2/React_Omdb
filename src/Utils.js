import $ from 'jquery'

export function queryOmdb(query) {
  let term = query.replace(/\s/, "+")
  let url = "http://omdbapi.com/?s=" + term
  return $.getJSON(url).then(function(response) {
    return response["Search"]
  })
}
