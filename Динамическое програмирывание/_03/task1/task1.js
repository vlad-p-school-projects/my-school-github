const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function fetchCityLocation(cityName) {
  return fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`)
    .then((rsp) => {
      if (rsp.ok) { return rsp.json() }
      throw new Error("Couldn't catch city")
    })
    .then((data) => data.results[0])
    .catch((err) => {
      throw new Error(err)
    })

}
function fetchWeatherByLocation(longitude, latitude) {
  return fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`)
    .then((rsp) => {
      if (rsp.ok) { return rsp.json() }
      throw new Error("Couldn't catch city")
    })
    .then((weather) => {
      const {
        hourly: {
          temperature_2m: temperature = []
        } = {}
      } = weather;

      return temperature[temperature.length - 1];
    })
    .catch((err) => {
      throw new Error(err)
    })

}
function renderWeather(city) {
  let cityEl = document.querySelector(".city");
  let temperatureEl = document.querySelector(".temperature");

  return function (temperature) {
    cityEl.innerText = city;
    temperatureEl.innerText = temperature;
  }

}
const city = prompt("Введите ваш город!");
if (city) {
  fetchCityLocation(city)
    .then(({ latitude, longitude }) => fetchWeatherByLocation(longitude, latitude))
    .then(renderWeather(city))
}

