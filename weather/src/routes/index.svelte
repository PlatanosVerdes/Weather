<script>
	import { getWeatherFrom } from './services/weather.js';
	import WeatherHeader from './components/weather-hearder.svelte';
	import WeatherMap from './components/weather-map.svelte';
	import WeatherFooter from './components/weather-footer.svelte';
	import WeatherIcon from './components/weather-icon.svelte';
	let crdLatitude;
	let crdLongitude;

	if (typeof window !== 'undefined') {
		const options = {
			enableHighAccuracy: true,
			timeout: 5000,
			maximumAge: 0
		};

		function success(pos) {
			const crd = pos.coords;

			console.log('Your current position is:');
			console.log(`Latitude : ${crd.latitude}`);
			console.log(`Longitude: ${crd.longitude}`);
			console.log(`More or less ${crd.accuracy} meters.`);

			crdLatitude = crd.latitude;
			crdLongitude = crd.longitude;
		}

		function error(err) {
			console.warn(`ERROR(${err.code}): ${err.message}`);
		}

		navigator.geolocation.getCurrentPosition(success, error, options);
	}
</script>

{#await getWeatherFrom(`${crdLatitude}, ${crdLongitude}`) then weather}
	<section>
		<WeatherHeader {weather} />
		<h1>{weather.temperature}°</h1>
		<WeatherIcon conditionIcon={weather.conditionIcon} conditionText={weather.conditionText} />
		<h2>{weather.conditionText}</h2>
	</section>
	<WeatherFooter {weather} />
{/await}

<style>
	section {
		padding: 16px;
	}

	h1 {
		font-weight: 300;
		font-size: 120px;
		color: #333;
		text-transform: uppercase;
		padding: 0px;
	}

	h2 {
		/* font-weight: 300;
		font-size: 12px;
		color: #333;
		text-transform: uppercase;
		padding-top: 5px; */
		font-weight: 500;
		font-size: 24px;
		color: #333;
		padding: 0px;
	}
</style>
