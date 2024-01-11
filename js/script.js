// Importera funktionen getData från info-retriver.js
import { getData } from "./info-retriver.js";

// Hämta elementet med klassen "weather-forecast" och lagra det i variabeln msgElem
let msgElem = document.getElementsByClassName("weather-forecast");

// Anropa getData-funktionen asynkront och lagra resultatet i variabeln dateToFetch
const dateToFetch = await getData();

// Lägg till en händelselyssnare för "load" -händelsen på fönstret och anropa init-funktionen
window.addEventListener("load", init());

// Initiera funktionen init
function init() {
  // Lägg till en händelselyssnare för "change" -händelsen på elementet med id "datum" och anropa showWeather-funktionen
  document.getElementById("datum").addEventListener("change", showWeather);
}

// Funktionen showWeather visar väderinformation baserat på det valda datumet
function showWeather() {
  // Deklarera variabler för bild-URL och väderförhållanden
  let imageUrl = "";
  let weatherMain = "";

  // Loopa igenom dateToFetch för att hitta väderförhållandet för det valda datumet
  for (let i = 0; i < dateToFetch.length; i++) { //En for-loop används för att iterera över varje objekt i dateToFetch-arrayen, som förväntas innehålla väderinformation för flera dagar.
    if (dateToFetch[i].dt_txt.split(" ")[0] === document.getElementById("datum").value) { //Inuti loopen används en if-sats för att kontrollera om datumet från det aktuella objektet i arrayen matchar det datum som användaren har valt på webbsidan. 
      weatherMain = dateToFetch[i].weather[0].main;
      break;
    }
  }

  // Använd en switch-sats för att matcha väderförhållandet och tilldela rätt bild-URL
  switch (weatherMain) {
    case "Clouds":
      imageUrl = "../img/cloudy.png";
      break;
    case "Rain":
      imageUrl = "../img/rain.png";
      break;
    case "Snow":
      imageUrl = "../img/snowy.png";
      break;
    case "Sun":
      imageUrl = "../img/sun.png";
      break;
    default:
      imageUrl = "../img/ingen-data.png";
      break;
  }

  // Skapa ett bildlement, tilldela bild-URL och alt-attribut, rensa befintligt innehåll och lägg till bilden i DOM
  const imgElement = document.createElement("img");
  imgElement.src = imageUrl;
  imgElement.alt = weatherMain;
  document.getElementById("weather-icons").innerHTML = ''; // Rensa befintligt innehåll
  document.getElementById("weather-icons").appendChild(imgElement);
}
