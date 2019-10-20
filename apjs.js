const getForecast   = async (lat, long) =>{

let url = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&APPID=b8bdab8c9e24b6157b1ac43e8a21dea7`
const response = await fetch(url);
const data = await response.json();
console.log(data);

}