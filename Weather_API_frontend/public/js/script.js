// event and event.preventDefault(); is to prevent the form from reloading
async function fetchWeatherInformation (event) {
    event.preventDefault();
    const cityValue = document.getElementById('city').value;
    const countryValue = document.getElementById('country').value;

    // Get weather information from the backend
    const response = await fetch(`http://localhost:4000/weather?city=${cityValue}&country=${countryValue}`);
    const result = await response.json();
    
    document.getElementById('locationName').innerHTML = `<i class="fas fa-map-marker-alt"></i> Location: ${result.location_name}`;
    document.getElementById('temperature').innerHTML = `<i class="fas fa-thermometer-half"></i> Temperature: ${result.temperature}`;
    document.getElementById('wind').innerHTML = `<i class="fas fa-wind"></i> Wind: ${result.wind}`;
    document.getElementById('cloudiness').innerHTML = `<i class="fas fa-cloud"></i> Cloudiness: ${result.cloudiness}`;
    document.getElementById('pressure').innerHTML = `<i class="fas fa-tachometer-alt"></i> Pressure: ${result.pressure}`;
    document.getElementById('humidity').innerHTML = `<i class="fas fa-tint"></i> Humidity: ${result.humidity}`;
    document.getElementById('sunrise').innerHTML = `<i class="fas fa-sun"></i> Sunrise: ${result.sunrise}`;
    document.getElementById('sunset').innerHTML = `<i class="fas fa-moon"></i> Sunset: ${result.sunset}`;
    document.getElementById('geoCoordinates').innerHTML = `<i class="fas fa-globe"></i> Geo Coordinates: ${result.geo_coordinates}`;
    document.getElementById('requestedTime').innerHTML = `<i class="fas fa-clock"></i> Requested Time: ${result.requested_time}`;

    console.log(result);
}

const myForm = document.getElementById('myForm');
myForm.addEventListener('submit', fetchWeatherInformation);