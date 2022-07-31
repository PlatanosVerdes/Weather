export async function getWeatherFrom(data = 'Mallorca') {
	return fetch(`/api/get-weather?q=${data}`).then((res) => res.json());
}