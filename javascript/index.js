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
}
updateTime();
setInterval(updateTime, 1000);