const input = document.querySelector("#input");
const cityname = document.querySelector("#countryname");
let unixNow = Math.floor(Date.now() / 1000);
input.addEventListener("keypress", (event) => {
  if (event.keyCode == 13) {
    getWeather(input.value);
    cityName.innerText = input.value;
    input.value = "";
  }
});
async function getWeather(city) {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b4d6604ca0d967dbdaedf03bb45253d4`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.name);
      displayData(
        data.name,
        data.main.temp,
        data.weather[0].main,
        data.sys.sunrise,
        data.sys.sunset
      );
    });
}
function displayData(cityName, tempK, status, unixSR, unixSS) {
  let day = true;
  document.getElementById("cityName").innerHTML = cityName;
  const tempC = tempK - 273;
  document.getElementById("temperature").innerHTML = Math.floor(tempC);
  document.getElementById("pic").src = status + ".png";
  document.getElementById("medku").innerHTML = status + "";
  if (unixNow >= unixSR && unixNow <= unixSS) {
    day = true;
    document.getElementsByClassName("nana")[0].style.background = "white";
  } else {
    day = false;
    console.log("shunu");
    document.getElementsByClassName("nana")[0].style.backgroundColor =
      "#111827";
    document.getElementById("pic").src = status + "n.png";
  }
  if (unixNow >= unixSR && unixNow <= unixSS) {
    day = false;
    document.getElementById("temperature").style.background = "black";
  } else {
    document.getElementById("temperature").style.background = "white";
  }
}
