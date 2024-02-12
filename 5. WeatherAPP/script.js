/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  //HINT: Use template literals to create a url with input and an API key
  const full_URL=`${URL}?q=${city}&appid=${API_KEY}`;
  let wData= fetch(full_URL);
  //CODE GOES HERE
  return wData;
}


/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = () => {
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE
  let wData1=getWeatherData(city);
  wData1.then((response)=>{
    let WDataJson = response.json()
    console.log(WDataJson);
    return WDataJson;
  }).then((response)=>{
    response.main.temp_min= Math.round(response.main.temp_min-273.15);
    response.main.feels_like= Math.round(response.main.feels_like-273.15);
    response.main.temp= ((response.main.feels_like+response.main.temp_min)/2);
    showWeatherData(response)
  })
}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
  //CODE GOES HERE
   document.getElementById('city-name').innerText=weatherData.name;
   document.getElementById('temp').innerText=weatherData.main.temp;
   document.getElementById('min-temp').innerText=weatherData.main.temp_min;
   document.getElementById('max-temp').innerText=weatherData.main.feels_like;
   document.getElementById('weather-type').innerText=weatherData.weather[0].description;

}

