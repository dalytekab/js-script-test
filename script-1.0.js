function callApi(data) {
  var url = "https://3000-flyingforyo-flyingforyo-ykf2e6b5xyg.ws-eu116.gitpod.io/add_stats";

  console.log("Before API call");

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // Convert data object to JSON string
  })
  .then(function(response) {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    console.log("After API call");
    console.log("Response received:", response);
    return true; // Return true if fetch is successful
  })
  .catch(function(error) {
    console.error('Error:', error);
    return false; // Return false if there was an error
  });
}
