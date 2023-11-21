// Import Dependencies
require("dotenv").config(); //it will load ENV variables from the file .env
const express = require('express');
const axios = require('axios');
// Create Express app
const app = express();
const PORT = process.env.PORT || 4000;

// Set up middleware
app.use(express.json());

// Set up routes
app.get("/", (req, res) => {
    res.send("Hello, Dolores! Your Server is running...Better catch it!");
})

// Set Weather Endpoint "/weather"
app.get("/weather", async (req, res) => {
    const {city, country} = req.query;
    const API_KEY = process.env.OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`;

    try {
        const response = await axios.get(url);
        const data = response.data;
        // console.log(data);

    const result = {
        location_name: `${data.name}, ${data.sys.country}`,
        temperature: `${data.main.temp} °C`,
        wind: `Speed: ${data.wind.speed} m/s, Direction: ${data.wind.deg} degrees`,
        cloudiness: data.weather[0].description,
        pressure: `${data.main.pressure} hpa`,
        humidity: `${data.main.humidity}%`,
        sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
        sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString(),
        geo_coordinates: `[${data.coord.lat}, ${data.coord.lon}]`,
        requested_time: new Date().toISOString(),
        forecast: {} // this will add some forecast data ifthey are available
    };

    res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
// Test http://localhost:4000/weather?Bogota&country=co

// Server Listener
app.listen(PORT, () => console.log(`Listening for client requests on port ${PORT}🔥🔥🔥🔥🔥🔥🔥`));
