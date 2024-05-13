const express = require('express');
const router = express.Router();
const dataroutes = require('../routes/dataRoutes');
const env = require('dotenv').config();


// location API
//const LOC_API_KEY = process.env.LOC_API_KEY;
const LOC_API_URL = process.env.LOC_API_URL;

// weather API
const WEA_API_KEY = process.env.WEA_API_KEY;
const WEA_API_URL = process.env.WEA_API_URL;

//making the call to the APIs for the controller


const getweather = async (req, res) => {
    try {
        const loc_response = await fetch(`${LOC_API_URL}`);
        const loc_data = await loc_response.json();
        const lat = loc_data.lat; // Access lat directly
        const lon = loc_data.lon; // Access lon directly
        const weather_response = await fetch(`${WEA_API_URL}?lat=${lat}&lon=${lon}&appid=${WEA_API_KEY}`);
        const weather_data = await weather_response.json();
        res.send(weather_data);
        //console.log(weather_data);
    }
    catch (err) {
        console.log(err);
    }
}
module.exports = {
    getweather: getweather
};
