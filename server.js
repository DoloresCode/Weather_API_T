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

// Server Listener
app.listen(PORT, () => console.log(`Listening for client requests on port ${PORT}🔥🔥🔥🔥🔥🔥🔥`));
