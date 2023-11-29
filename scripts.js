fetch("./data/weather.json")
  .then((response) => {
    //make a json format response
    //from the actual response content
    return response.json();
  })
  .then((formattedResponse) => {
    //directly accessing the weather property from the response
    return displayWeatherCards(formattedResponse.weather);
  });

function displayWeatherCards(data) {
  return data.forEach((item) => {
    const cardHTML = `
        <div>
            <h3>${item.city}</h3>
            <p>${item.temperature}</p>
        </div>
    `;
    document.body.innerHTML +=cardHTML;
  });
}
