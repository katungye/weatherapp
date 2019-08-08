window.addEventListener('load', ()=>{
	let long;
	let lat;
	let temperatureDescription = document.querySelector('.temp-discr');
	let temperatureDegree = document.querySelector('.temp-degree');
	let locationTimezone = document.querySelector('.location-timezone');

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(position=>{
			long = position.coords.longitude;
			lat = position.coords.latitude;

			cost api = `/${lat},${long}`;//modifie the latitude and longtude

			fetch(api)
			.then(response =>{
				return response.json();
			})
			.then(data=>{
				//console.log(data);
				const{temperature, summary, icon} = data.currently;
				//Set dom elements from the api
				temperatureDegree.textContent = temperature;
				temperatureDescription.textContent = summary;
				location-timezone.textContent = data.timezone;
			})
		});

	}

	fuction setIcons(icon, iconeID){

	}

});