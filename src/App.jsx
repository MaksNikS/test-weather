import React, { useState, useEffect } from "react";
import { WeatherInfo, Loader } from "./components";
import { API_KEY } from "./constants";
import Styles from "./App.module.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");

  const fetchWeather = async () => {
    setLoading(true);
    if (city) {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&&appid=${API_KEY}`;
      const data = await fetch(apiUrl).then((res) => res.json());
      setWeatherData(data);
    } else {
      getGeoLocation();
    }
    setLoading(false);
  };

  const getGeoLocation = async () => {
    const geoData = await fetch(
      "https://geolocation-db.com/json/"
    ).then((res) => res.json());
    if (geoData?.city) {
      const valid = window.confirm(`Your city is ${geoData.city}?`);
      if (valid) {
        setCity(geoData.city);
      } else {
        alert("Default city is Omsk");
        setCity("Omsk");
      }
    }
  };

  useEffect(() => {
    fetchWeather();
    // eslint-disable-next-line
  }, [city]);

  return (
    <div className={Styles.app}>
      {loading ? (
        <Loader />
      ) : (
        weatherData && (
          <WeatherInfo
            weatherData={weatherData}
            city={city}
            setCity={setCity}
            getGeoLocation={getGeoLocation}
          />
        )
      )}
    </div>
  );
}

export default App;
