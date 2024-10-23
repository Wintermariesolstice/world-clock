function updateTime(){
//Poland
let polandElement= document.querySelector("#poland");
if (polandElement) {
let polandDateElement = polandElement.querySelector(".date");
let polandTimeElement = polandElement.querySelector(".time");
let polandTime = moment().tz("Poland");
polandDateElement.innerHTML = polandTime.format("MMMM Do YYYY");
polandTimeElement.innerHTML = `${polandTime.format(
  "h:mm:ss ")}<small>${polandTime.format("A")}</small>`;
}

  //Paris
let parisElement = document.querySelector("#paris");
if (parisElement) {
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
let parisTime = moment().tz("Europe/Paris");
parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
parisTimeElement.innerHTML = `${parisTime.format(
  "h:mm:ss "
)}<small>${parisTime.format("A")}</small>`;
}}

function updateCity(event){
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current"){
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_"," ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
     <div class="city">
        <div>
        <h2>${cityName}</h2>
        
    <div class="date">${cityTime.format("MMMM Do YYYY")}
       </div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss ")}<small>${cityTime.format("A")}</small></div>
    </div>

    `;
}

updateTime();
setInterval(updateTime,1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);