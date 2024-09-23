function callApi() {
  var url = "https://webhook.site/10fc0e6a-32e8-45c8-89fa-ae7c2a5aa317";

  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // Add any other headers you need
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
    // Handle the response data as needed
  })
  .catch(function(error) {
    console.error('Error:', error);
  });
}
