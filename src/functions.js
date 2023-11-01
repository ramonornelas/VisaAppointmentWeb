function searchCity(cityId) {
  url = 'https://appointment-checker.azurewebsites.net/api/endpoint?cityId=' + cityId;

  return fetch(url)
      .then(response => response.json())
      .then(data => {
          const text = data.result;
          //var resultElement = document.getElementById("result");
          //resultElement.innerHTML = text;
          return text;  // return the text here
      })
      .catch(error => {
          //var resultElement = document.getElementById("result");
          //resultElement.innerHTML = "Error fetching data from the endpoint";
          return "Error fetching data from the endpoint";  // return the error message here
      });
}