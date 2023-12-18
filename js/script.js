import { getData } from "./info-retriver.js";

let msgElem = document.getElementsByClassName("weather-forecast");
const dateToFetch = await getData();
window.addEventListener("load", init());
// Display the image
const imgElement = document.createElement("img");
imgElement.src = imageUrl;
imgElement.alt = weatherMain;
imgElement.classList.add("weather-icon");  // Add the weather-icon class

document.getElementById("weather-icons").innerHTML = ''; // Clear existing content
document.getElementById("weather-icons").appendChild(imgElement);


function init() {
  console.log("init");
  document.getElementById("datum").addEventListener("change", showWeather);
}

function showWeather() {


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
        case "Clear":
          imageNumber = 4;
          break;
        default:
          imageNumber = 1; // Default to cloudy image if unknown weather condition
      }

      // Get the image URL using the geticon function
      const imageUrl = geticon(imageNumber);

      // Display the image
      const imgElement = document.createElement("img");
      imgElement.src = imageUrl;
      imgElement.alt = weatherMain;
      document.getElementById("weather-icons").innerHTML = ''; // Clear existing content
      document.getElementById("weather-icons").appendChild(imgElement);

      console.log(weatherMain);
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
