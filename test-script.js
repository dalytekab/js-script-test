function callApi() {
  var url = "https://webhook.site/10fc0e6a-32e8-45c8-89fa-ae7c2a5aa317";
  var xhr = new XMLHttpRequest();

  xhr.open('GET', url, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  // Add any other headers if necessary

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) { // Request is done
      if (xhr.status === 200) { // Successfully completed
        try {
          var data = JSON.parse(xhr.responseText);
          console.log('Success:', data);
          // Handle the response data as needed
        } catch (e) {
          console.error('Error parsing JSON:', e);
        }
      } else {
        console.error('Network response was not ok');
      }
    }
  };

  xhr.send(); // Send the request
}
