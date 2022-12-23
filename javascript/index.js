function updateTime() {
// Auckland
let aucklandElement = document.querySelector("#auckland");
let aucklandDateElement = aucklandElement.querySelector(".date");
let aucklandTimeElement = aucklandElement.querySelector(".time");
aucklandDateElement.innerHTML = moment().tz("Pacific/Auckland").format("MMMM Do, YYYY");
aucklandTimeElement.innerHTML = moment().tz("Pacific/Auckland").format("h:mm:ss [<small>]A[</small>]");
// Capetown
let capetownElement = document.querySelector("#capetown");
let capetownDateElement = capetownElement.querySelector(".date");
let capetownTimeElement = capetownElement.querySelector(".time");
capetownDateElement.innerHTML = moment().tz("Africa/Johannesburg").format("MMMM Do, YYYY");
capetownTimeElement.innerHTML = moment().tz("Africa/Johannesburg").format("h:mm:ss [<small>]A[</small>]");
// Hongkong
let hongkongElement = document.querySelector("#hongkong");
let hongkongDateElement = hongkongElement.querySelector(".date");
let hongkongTimeElement = hongkongElement.querySelector(".time");
hongkongDateElement.innerHTML = moment().tz("Hongkong").format("MMMM Do, YYYY");
hongkongTimeElement.innerHTML = moment().tz("Hongkong").format("h:mm:ss [<small>]A[</small>]");
}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if(cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();

    }
    
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
<div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  <a href="index.html">All cities</a>
  `;
}
updateTime();
setInterval(updateTime, 1000);


let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
