const API_KEY = "91cce404db7f7f79c1684fc4b4022752";
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data)=>{
            const weather = document.querySelector("#weather p:last-child");
            const city = document.querySelector("#weather p:first-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} ${Math.round(data.main.temp)}℃`;
        });

}
function onGeoError(){
    console.log("Can't find you");
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);