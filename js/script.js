'use strict';

const apiKey = '8295b8275d7350f144aec38820e14f22'; 
const city = 'Kyiv'; 
const weatherContainer = document.getElementById('weather-container');

function getWeather(){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = {
                temperature: data.main.temp,
                description: data.weather[0].description,
                icon: data.weather[0].icon,
                timestamp: Date.now()
            }

            localStorage.setItem('weather', JSON.stringify(weather));
            displayWeather(weather);
        })
        .catch(error => {
            console.error('Error', error);  
            weatherContainer.innerHTML = '<p>Не вдалося отримати прогноз погоди'          
        })
}

function displayWeather(weather){
    weatherContainer.innerHTML = `
    <img src="http://openweathermap.org/img/w/${weather.icon}.png" alt="${weather.description}">
        <p>Температура: ${weather.temperature}°C</p>
        <p>Опис: ${weather.description}</p>
    `;
}

function checkWeather(){
    const storedWeather = localStorage.getItem('weather');
    if(storedWeather) {
        const weather = JSON.parse(storedWeather);
        const timeDiff = Date.now() - weather.timestamp;
        const twoHours = 2 * 60 * 60 * 1000;

        if(timeDiff < twoHours) {
            displayWeather(weather);
            return;
        }
    }
    getWeather();
}

checkWeather();