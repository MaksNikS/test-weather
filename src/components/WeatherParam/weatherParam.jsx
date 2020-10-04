import React from "react";
import Styles from "./weatherParam.module.css";

const WeatherParam = ({ nameParam, valueParam }) => {
  return (
    <div className={Styles.param}>
      <p className={Styles.param__name}>{nameParam}</p>
      <p className={Styles.param__value}>{valueParam}</p>
    </div>
  );
};

export default WeatherParam;
