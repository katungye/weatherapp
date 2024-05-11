//listen to the submit event on the form and send a POST request to the server wait for the response and then update the UI

// get element from the DOM
const batton = document.getElementById('generate');


//chech id the button is clicked

batton.addEventListener('click', async () => {
	const response = await fetch('/weather');
	const data = await response.json();
	console.log(data);
	document.getElementById('temp').innerHTML = data.main.temp;
	document.getElementById('humidity').innerHTML = data.main.humidity;
	document.getElementById('pressure').innerHTML = data.main.pressure;
	document.getElementById('wind').innerHTML = data.wind.speed;
	document.getElementById('description').innerHTML = data.weather[0].description;
	document.getElementById('city').innerHTML = data.name;
	document.getElementById('country').innerHTML = data.sys.country;
	//document.getElementById('icon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
	//document.getElementById('weather').style.display = 'block';
});
