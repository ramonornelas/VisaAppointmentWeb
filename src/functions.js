function searchCity(cityId) {
  url = 'https://appointment-checker.azurewebsites.net/api/endpoint?cityId=' + cityId;

  fetch(url)
      .then(response => response.json())
      .then(data => {
          const text = data.result;
          var resultElement = document.getElementById("result");
          resultElement.innerHTML = text;
      })
      .catch(error => {
          var resultElement = document.getElementById("result");
          resultElement.innerHTML = "Error fetching data from the endpoint";
          console.error(error);
      });
}