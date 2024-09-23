function callApi() {
  var url = "https://webhook.site/10fc0e6a-32e8-45c8-89fa-ae7c2a5aa317";

  fetch(url, {
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(function(response) {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(function(data) {
    console.log('Success:', data);
  })
  .catch(function(error) {
    console.error('Error:', error);
  });
}
