const apikey="72ab1afb9de97bf30384fd74fdef582e";


function onGeoOk(position){
    const lat=position.coords.latitude;
    const lon=position.coords.longitude;
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`;

    fetch(url).then((response)=>response.json()).then((data)=>{
    const weather=document.querySelector("#weather span:first-child")

    const city=document.querySelector("#weather span:last-child")
    city.innerText=data.name;

    const temperature = data.main.temp.toFixed(1);
    const icon = data.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/wn/${icon}.png`;

    weather.innerHTML = `<img src="${iconUrl}" alt="${data.weather[0].main} icon">${temperature}°C`;
   });
}
function onGeoError(){
    alert("Can`t find you, No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

