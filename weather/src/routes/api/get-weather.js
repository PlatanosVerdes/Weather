const FETCH_OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'eb06d4a166mshd34c35521916c7ap1290bdjsn3f373868060c',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

export async function GET(event) {
	const { searchParams } = event.url;
	const query = searchParams.get('q') ?? 'Mallorca';
	const response = await fetch(
		`https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`,
		FETCH_OPTIONS
	);

	const data = await response.json();

	const { location, current } = data;
	const { country, localtime, name, region } = location;
	const { condition, humidity, feelslike_c, is_day, temp_c, wind_kph, wind_dir } = current;
	const { code, text, icon } = condition;

	const body = {
		conditionCode: code,
		conditionText: text,
        conditionIcon: icon,
		country,
		localDate: localtime.split(' ')[0],
		localTime: localtime.split(' ')[1],
        locationRegion: region,
		locationName: name,
		humidity,
		isDay: is_day,
		feelsLike: feelslike_c,
		temperature: temp_c,
		windSpeed: wind_kph,
		windDirection: wind_dir
	};

	return {
		status: 200,
		body
	};
}
