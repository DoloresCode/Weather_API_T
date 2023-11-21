// event and event.preventDefault(); is to prevent the form from reloading
async function fetchWeatherInformation (event) {
    event.preventDefault();
    const cityValue = document.getElementById('city').value;
    const countryValue = document.getElementById('country').value;
    const response = await fetch(`http://localhost:4000/weather?city=${cityValue}&country=${countryValue}`);
    const result = await response.json();
    
    document.getElementById('locationName').innerHTML = 'Location: ' + result.location_name;
    document.getElementById('temperature').innerHTML = 'Temperature: ' + result.temperature;
    document.getElementById('wind').innerHTML = 'Wind: ' + result.wind;
    document.getElementById('cloudiness').innerHTML = 'Cloudiness: ' + result.cloudiness;
    document.getElementById('pressure').innerHTML = 'Pressure: ' + result.pressure;
    document.getElementById('humidity').innerHTML = 'Humidity: ' + result.humidity;
    document.getElementById('sunrise').innerHTML = 'Sunrise: ' + result.sunrise;
    document.getElementById('sunset').innerHTML = 'Sunset: ' + result.sunset;
    document.getElementById('geoCoordinates').innerHTML = 'Geo Coordinates: ' + result.geo_coordinates;
    document.getElementById('requestedTime').innerHTML = 'Requested Time: ' + result.requested_time;
    document.getElementById('forecast').innerHTML = 'Forecast: ' + result.forecast;

    console.log(result);
}

const myForm = document.getElementById('myForm');
myForm.addEventListener('submit', fetchWeatherInformation);