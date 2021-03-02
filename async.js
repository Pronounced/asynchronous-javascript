const fetch = require("node-fetch");
var url = "https://cat-fact.herokuapp.com/facts"

const fetchPromise = function (api) {
  return fetch(api)
  .then(response => response.json())
  .then(result => result);
}

const fetchAsyncAwait = async function (api) {
  const response = await fetch(api);
  const results = await response.json();
  return results;
}

const printFact = async function (url, fetchCallback) {
  fetchCallback(url).then(facts => console.log('Fact: ', facts[Math.floor(Math.random() * facts.length)].text))
}

printFact(url, fetchAsyncAwait);
printFact(url, fetchPromise);