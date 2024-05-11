const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');


router.get('/weather', dataController.getweather);


module.exports = router;	

