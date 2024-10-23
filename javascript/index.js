function updateTime(){
//Poland
let polandElement= document.querySelector("#poland");
let polandDateElement = polandElement.querySelector(".date");
let polandTimeElement = polandElement.querySelector(".time");
let polandTime = moment().tz("Poland");
polandDateElement.innerHTML = polandTime.format("MMMM Do YYYY");
polandTimeElement.innerHTML = `${polandTime.format(
  "h:mm:ss ")}<small>${polandTime.format("A")}</small>`;


  //Paris
let parisElement = document.querySelector("#paris");
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
let parisTime = moment().tz("Europe/Paris");
parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
parisTimeElement.innerHTML = `${parisTime.format(
  "h:mm:ss "
)}<small>${parisTime.format("A")}</small>`;
}
updateTime();
setInterval(updateTime,1000);