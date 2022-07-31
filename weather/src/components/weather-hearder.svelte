<script>
	export let weather;
</script>

<div>
	<h1>{weather.locationName},</h1>
	<h2>{weather.locationRegion}</h2>
    <h3>{weather.localTime}</h3>
</div>

<style>
	h1 {
		font-weight: 400;
		color: #333;
		text-transform: uppercase;
		padding: 16px 0 0 0;
	}

	h2 {
		font-weight: 400;
		font-size: 16px;
		color: #333;
		text-transform: uppercase;
		padding: 0px;
	}

    h3{
        font-weight: 400;
        font-size: 12px;
        color: #333;
        text-transform: uppercase;
        padding: 0px;
    }
</style>
