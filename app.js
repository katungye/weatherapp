const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ejs = require('ejs');
const dataroutes = require('./routes/dataRoutes');
const env = require('dotenv').config();

const PORT = process.env.PORT;
const HOST = process.env.HOST;

//const port = 3000;
//const ip = '127.0.0.1';


//view engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('public'));
app.use(express.static('views'));

//body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes 
app.use(dataroutes);


app.get('/', (req, res) => {
	res.render('index');
  
});


app.listen(PORT, HOST, () => {
    console.log(`Server is listening on http://${HOST}:${PORT}`);
});

