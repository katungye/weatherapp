// script.js

const getWeather = document.getElementById('getWeather');

getWeather.addEventListener('click', function () {
    // if button clicked, then send a request to the API
    const url = '/Weather'; // Enclose the URL string in quotes

    fetch(url)
        .then(res => res.json())
        .then(data => displayWeather(data))
})

function displayWeather(data) {
    const cityElement = document.getElementById('city');
    const temperatureElement = document.getElementById('temperature');
    const weatherElement = document.getElementById('weather');
    const windSpeedElement = document.getElementById('windSpeed');
    const humidityElement = document.getElementById('humidity');

    cityElement.textContent = data.name;
    const temperatureCelsius = (data.main.temp - 273.15).toFixed(2); // Convert temperature to Celsius and round to 2 decimal places
    temperatureElement.textContent = `${temperatureCelsius} °C`;
    weatherElement.textContent = data.weather[0].description;
    windSpeedElement.textContent = `${data.wind.speed} m/s`;
    humidityElement.textContent = `${data.main.humidity}%`;
}
