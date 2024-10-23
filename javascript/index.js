function updateTime(){
  //Denver
  let denverElement = document.querySelector("#denver");
  if (denverElement) {
    let denverDateElement = denverElement.querySelector(".date");
    let denverTimeElement = denverElement.querySelector(".time");
    let denverTime = moment().tz("America/Denver");
    denverDateElement.innerHTML = denverTime.format("MMMM Do YYYY");
    denverTimeElement.innerHTML = `${denverTime.format(
      "h:mm:ss "
    )}<small>${denverTime.format("A")}</small>`;
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
  }

  //Jakarta
  let jakartaElement = document.querySelector("#jakarta");
  if (jakartaElement) {
    let jakartaDateElement = jakartaElement.querySelector(".date");
    let jakartaTimeElement = jakartaElement.querySelector(".time");
    let jakartaTime = moment().tz("Asia/Jakarta");
    jakartaDateElement.innerHTML = jakartaTime.format("MMMM Do YYYY");
    jakartaTimeElement.innerHTML = `${jakartaTime.format(
      "h:mm:ss "
    )}<small>${jakartaTime.format("A")}</small>`;
  }
}

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
    <a href="index.html">Back to all cities</a>

    `;
}

updateTime();
setInterval(updateTime,1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);