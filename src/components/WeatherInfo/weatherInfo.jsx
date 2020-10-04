import React, { useState } from "react";
import { degToCardinal } from "../../utils";
import WeatherParam from "../WeatherParam";
import CitySelector from "../CitySelector";
import ToggleDeg from "../ToggleDeg";
import Styles from "./weatherInfo.module.css";

const WeatherInfo = ({ weatherData, city, setCity, getGeoLocation }) => {
  const [degree, toggleDegree] = useState(false);

  const imageUrl = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const celsius = Math.floor(weatherData.main.temp - 273.15);
  const fahrenheit = (celsius * 9) / 5 + 32;
  const cardinal = degToCardinal(weatherData.wind.deg);

  return (
    <div className={Styles.info}>
      <div className={Styles.info__header}>
        <CitySelector
          city={city}
          setCity={setCity}
          getGeoLocation={getGeoLocation}
        />
        <ToggleDeg degree={degree} toggleDegree={toggleDegree} />
      </div>
      <div className={Styles.info__body}>
        <div className={Styles.info__data}>
          <img className={Styles.info__img} src={imageUrl} alt="weather" />
          <span className={Styles.info__degree}>
            {degree ? `${fahrenheit}F` : `${celsius}°`}
          </span>
        </div>
        <p className={Styles.info__desc}>
          {weatherData.weather[0].description}
        </p>
      </div>
      <div className={Styles.info__params}>
        <WeatherParam
          nameParam="Wind:"
          valueParam={`${weatherData.wind.speed} M/s, ${cardinal}`}
        />
        <WeatherParam
          nameParam="Pressure:"
          valueParam={`${Math.round(weatherData.main.pressure / 1.3)} mm Hg`}
        />
        <WeatherParam
          nameParam="Humidity:"
          valueParam={`${weatherData.main.humidity}%`}
        />
        <WeatherParam
          nameParam="Probability:"
          valueParam={`${weatherData.clouds.all}%`}
        />
      </div>
    </div>
  );
};

export default WeatherInfo;
