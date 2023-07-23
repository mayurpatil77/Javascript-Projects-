
// Weather Data Refrence 

const weatherImg = document.getElementById("WeatherImg");
const cityName = document.getElementById("cityName");
const localTime = document.getElementById("localtime");
const tempC = document.getElementById("temp_c");
const tempF = document.getElementById("temp_f");
const conditionText = document.getElementById("conditionText");
const windMph = document.getElementById("wind_mph");
const windKph = document.getElementById("wind_kph");
const humidity = document.getElementById("humidity");
const windGusts = document.getElementById("Wind-Gusts");
const searchcity = document.getElementById("searchcity")

// API KEY 

const API_KEY = "54b6e7682d2b4ae4985113202232307"


async function getData() {
    const city = document.getElementById('city').value;
    const API_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`;
  
    try {
      const response = await fetch(API_URL);
  
      if (!response.ok) {
        throw new Error('City not found. Please enter a valid city name.');
      }
  
      const data = await response.json();
  
      // Filling The Data in HTML
      weatherImg.src = data.current.condition.icon;
      cityName.textContent = `City Name: ${data.location.name}, ${data.location.region}, ${data.location.country}`;
      localTime.textContent = `Local Time: ${data.location.localtime}`;
      tempC.textContent = `Temp_c: ${data.current.temp_c}`;
      tempF.textContent = `Temp_f: ${data.current.temp_f}`;
      conditionText.textContent = `Condition: ${data.current.condition.text}`;
      windMph.textContent = `Wind Mph: ${data.current.wind_mph}`;
      windKph.textContent = `Wind Kph: ${data.current.wind_kph}`;
      humidity.textContent = `Humidity: ${data.current.humidity}`;
  
      // Clear Input Field
      document.getElementById('city').value = '';
  
      // Clear any previous error messages
      document.getElementById('error').textContent = '';
    } catch (error) {
      // Handle the error here
      // Display the error message in the <p> tag
      const errorElement = document.getElementById('error');
      errorElement.textContent = error.message;
    }
  }
  
  // Adding EventListener
  searchcity.addEventListener('click', getData);
  