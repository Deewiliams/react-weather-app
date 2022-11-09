import Search from "./Components/Search/Search";
import CurrentWeather from "./Components/CurrentWeather/CurrentWeather";
import { WEATHER_API_URL,WEATHER_API_KEY } from "./api";

import { Container } from "@material-ui/core";

function App() {
  
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        // setCurrentWeather({ city: searchData.label, ...weatherResponse });
        // setForecast({ city: searchData.label, ...forcastResponse });
        console.log("currentWeatherFetch", weatherResponse);
        console.log("forecastFetch", forcastResponse);
      })
      .catch(console.log);
    };

  return (
    <div className="App">
      <Container>
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
      </Container>
      
    </div>
  );
}

export default App;
