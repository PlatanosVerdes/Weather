<script>
    export let weather
</script>

<footer>
	<div>
		<span> {weather.humidity} </span>
		<strong> Humidity </strong>
	</div>

	<div>
		<span> {weather.windSpeed} Km/h </span>
		<strong> WindSpeed </strong>
	</div>

	<div>
		<span> {weather.feelsLike}° </span>
		<strong> Feels like </strong>
	</div>
</footer>

<style>
	footer {
		border-top: 1px solid #333;
        padding: 12px 32px;
        width: 80%;
        margin: 0 auto;
        /* border-radius: 10px; */
        display: flex;
        text-align: center;
        justify-content: space-around;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 12px;
	}

    span{
        display: block;
        font-weight: 600;
        font-size: 14px;
    }

    strong {
        color: #444;
        font-weight: 500;
    }
</style>
