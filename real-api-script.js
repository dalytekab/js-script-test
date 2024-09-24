function callApi(codePromo) {
  var url = "https://3000-flyingforyo-flyingforyo-ykf2e6b5xyg.ws-eu116.gitpod.io/stats&promo_code" + codePromo;

  console.log("Before API call");

  fetch(url, {
    method: 'GET',
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
  return true
}
