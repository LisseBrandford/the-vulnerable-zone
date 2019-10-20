var map = L.map('map').setView([27.48421,-109.93984],5);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',maxZoom: 18}).addTo(map);
L.control.scale().addTo(map);
L.control.mapCenterCoord().addTo(map);

let lati;
let longi;

console.log("icon", redIcon);


const xhttp = new XMLHttpRequest();

xhttp.open('Get', 'flood.json', true);
xhttp.send();



xhttp.onreadystatechange= function(){

  if(this.readyState == 4 && this.status==200){


    let datos = JSON.parse(this.responseText);
     var x = 0;
    for(let item of datos){
      console.log(item.latitud, item.lfongitud, "marker", redIcon);    
      
      L.marker([item.latitud, item.longitud],{draggable: false, riseOnHover: true, icon: redIcon}).addTo(map);
    }
    
  }
}


let latitude;
let longitude;

map.addEventListener('click', function(ev) {
    latitude = ev.latlng.lat;
    longitude = ev.latlng.lng;
    getWeather(latitude, longitude);               
    //console.log("lat:", latitude, "long:", longitude)
 });

 function selector(){

 }