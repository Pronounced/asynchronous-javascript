const url = "https://cat-fact.herokuapp.com/facts"
var fact;

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

const printFact = function (url, fetchCallback) {
  fetchCallback(url).then(facts => console.log('Fact: ', facts[Math.floor(Math.random() * facts.length)].text));
}

const htmlFact = function () {
  fetchPromise(url).then(facts => 
  {
    fact = facts[Math.floor(Math.random() * facts.length)].text
  });
  document.getElementById('fact1').innerHTML = fact;
}

printFact(url, fetchAsyncAwait);
printFact(url, fetchPromise);