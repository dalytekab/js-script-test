function callApi() {
  var url = "https://webhook.site/10fc0e6a-32e8-45c8-89fa-ae7c2a5aa317";

  console.log("Before API call");

  fetch(url, {
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(function(response) {
    console.log("After API call");
    console.log("Response received:", response);
  })
  .catch(function(error) {
    console.error('Error:', error);
  });

  console.log("API call initiated, not awaiting response");
  return true;
}
