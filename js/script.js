import { getData } from "./info-retriver.js";

let msgElem = document.getElementsByClassName("weather-forecast");
const dateToFetch = await getData();
window.addEventListener("load", init());

function init() {
  document.getElementById("datum").addEventListener("change", showWeather);
}

function showWeather() {
  let imageUrl; // Declare imageUrl here

  for (let i = 0; i < dateToFetch.length; i++) {
    if (dateToFetch[i].dt_txt.split(" ")[0] === document.getElementById("datum").value) {
      const weatherMain = dateToFetch[i].weather[0].main;

      // Get the corresponding image number based on weatherMain
      let imageNumber;
      switch (weatherMain) {
        case "Clouds":
          imageNumber = 1;
          break;
        case "Rain":
          imageNumber = 2;
          break;
        case "Snow":
          imageNumber = 3;
          break;
        case "Sun":
          imageNumber = 4;
          break;
        default:
          imageNumber = 1; // Default to cloudy image if unknown weather condition
      }

      // Get the image URL using the geticon function
      imageUrl = geticon(imageNumber);

      // Display the image
      const imgElement = document.createElement("img");
      imgElement.src = imageUrl;
      imgElement.alt = weatherMain;
      document.getElementById("weather-icons").innerHTML = ''; // Clear existing content
      document.getElementById("weather-icons").appendChild(imgElement);
    }
  }
}

function geticon(nr) {
  let icon;
  // Använder en switch-sats för att välja rätt bild baserat på fruktnumret
  switch (nr) {
    case 1:
      icon = "../img/cloudy.png";
      break;
    case 2:
      icon = "../img/rain.png";
      break;
    case 3:
      icon = "../img/snowy.png";
      break;
    case 4:
      icon = "../img/sun.png";
      break;
  }
  return icon;
}
