

const getWeather = async (lat, long) =>{
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=b8bdab8c9e24b6157b1ac43e8a21dea7`;
    
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const {main, name,timezone, weather,wind} = data;
    console.log(main);
    const {humidity, pressure, temp, temp_max, temp_min} = main;

    console.log(`Humedad en el ambiente es de ${humidity}%`);
    console.log(temp-273.15)

}
