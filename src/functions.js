function toggleMockedDataCount() {
    var mockedDataCheckbox = document.getElementById("mocked-data-checkbox");
    var mockedDataCount = document.getElementById("mocked-data-count");
    mockedDataCount.disabled = !mockedDataCheckbox.checked;
    var startDate = document.getElementById("start-date");
    startDate.disabled = !mockedDataCheckbox.checked;
}

function searchCity(cityId) {
    var mockedDataChecked = document.getElementById("mocked-data-checkbox").checked;
    var localEndpointChecked = document.getElementById("local-endpoint").checked;
    var startDate = document.getElementById("start-date").value;
    var mockedDataCount;
    var platformName = navigator.platform;

    if (mockedDataChecked) {
        mockedDataCount = document.getElementById("mocked-data-count").value;
        if (!mockedDataCount) {
            alert("Please enter the number of mocked elements.");
            return;
        }
    } else
        mockedDataCount = -1;

    if (localEndpointChecked) {
        url = 'http://127.0.0.1:5000/endpoint';
    } else {
        url = 'https://appointment-checker.azurewebsites.net/api/endpoint';
    }
    url = url + '?cityId=' + cityId;
    url = url + '&platformName=' + encodeURIComponent(platformName);
    url = url + '&mockedDataCount=' + mockedDataCount;
    url = url + '&startDate=' + encodeURIComponent(startDate);

  return fetch(url)
      .then(response => response.json())
      .then(data => {
          const text = data.result;
          return text;
      })
      .catch(error => {
          return "Error fetching data from the endpoint";
      });
}