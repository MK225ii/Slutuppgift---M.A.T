
function getData(dateToFetch) {

  const apiKey = "917225c5756b7579b37fc766deff8b4c";

  const url = "https://api.openweathermap.org/data/2.5/forecast?q=Norrkoping,Sweden&units=metric&appid=" + apiKey


  return fetch(url)

    .then(response => {
      return response.json()
    })

    .then(data => data.list);

}


export { getData };