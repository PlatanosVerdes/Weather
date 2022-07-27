<script>
	import { getWeatherFrom } from './services/weather.js';
	const weatherPromise = getWeatherFrom();
</script>

{#await weatherPromise then weather}
	<!-- {console.log(weather)} -->
	<section>
		<h1>{weather.locationName}</h1>
		<h2>{weather.temperature}°</h2>
		<h3>{weather.conditionText}</h3>
		<h4>{weather.windSpeed}</h4>
	</section>
{/await}

<style>
	
	h1 {
		/* font-size: 2em;
		font-weight: bold;
		text-align: center; */
		font-weight: 300;
		color: #333;
		text-transform: uppercase;
		padding: 32px 0 16px 16px;
	}

	h2 {
		font-weight: 300;
		font-size: 64px;
		color: #333;
		text-transform: uppercase;
		padding: 32px 0 0px 0px;
	}

	h3 {
		font-weight: 400;
		transform: rotate(-90deg);
		position: absolute;
		top: 12px;
		right: 12px;
	}
</style>
