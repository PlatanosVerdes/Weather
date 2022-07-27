const FETCH_OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'eb06d4a166mshd34c35521916c7ap1290bdjsn3f373868060c',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

export async function getWeatherFrom(query = 'Mallorca') {
	const respond = await fetch(
		`https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`,
		FETCH_OPTIONS
	);

	const data = await respond.json();

	const { location, current } = data;
	const { country, localtime, name } = location;
	const { condition, humidity, feelslike_c, is_day, temp_c, wind_kph, wind_dir } = current;
	const { code, text } = condition;

	return {
		conditionCode: code,
		conditionText: text,
		country,
		localtime,
		locationName: name,
		humidity,
		isDay: is_day,
		feelsLike: feelslike_c,
		temperature: temp_c,
		windSpeed: wind_kph,
		windDirection: wind_dir
	};
}