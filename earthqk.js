const getWeather = async (lat, long) =>{
    let url = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-10-18&endtime=2019-10-20&minmagnitude=4`;
    
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}