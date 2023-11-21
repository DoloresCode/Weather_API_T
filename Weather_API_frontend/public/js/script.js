const fetchWeatherInformation = async () => {
    const response = await fetch('http://localhost:4000/weather?city=Bogota&country=co');
    const result = await response.json();
    console.log(result);
}