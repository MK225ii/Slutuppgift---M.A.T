// Funktionen getData tar en parameter dateToFetch, men den används inte i funktionen.

function getData(dateToFetch) {
  
  // En API-nyckel för att använda OpenWeatherMap-tjänsten tilldelas till variabeln apiKey.
  const apiKey = "917225c5756b7579b37fc766deff8b4c";

  // En URL sammansätts med staden (Norrköping, Sweden), enheter (metric) och API-nyckel.
  const url = "https://api.openweathermap.org/data/2.5/forecast?q=Norrkoping,Sweden&units=metric&appid=" + apiKey;

  // En HTTP-begäran görs med fetch för att hämta data från den angivna URL:en.
  return fetch(url)
    // Efter att begäran är slutförd, konverteras responsen till JSON-format.
    .then(response => {
      return response.json();
    })
    // Den parsade JSON-datan returneras, specifikt "list" i det här fallet.
    .then(data => data.list);
}

// Funktionen exporteras för att kunna användas från andra filer.
export { getData };
