import React, { Fragment, useState, useEffect } from "react";
import "./weather.css";
import axios from "axios";

function Weather() {
  const [weather, setWeather] = useState({});
  const [weatherIcon, setWeatherIcon] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://www.meteosource.com/api/v1/free/point?lat=31.9539&lon=35.9106&sections=current%2Chourly&language=en&units=auto&key=zyd65kcd9z5qqdbtvgps9j670byqy6yig7mniuk1"
      )
      .then((res) => setWeather(res.data.current));
    if (weather.summary === "Sunny") {
      setWeatherIcon(
        "https://cdn.discordapp.com/attachments/1083428918457008139/1121382703032447056/sunny-removebg-preview.png"
      );
    }
    if (weather.summary === "Clear") {
      setWeatherIcon(
        "https://cdn.discordapp.com/attachments/1112627096804655246/1121504875587576008/weather-clear-symbolic-icon-511x512-zfj6vb21-removebg-preview.png"
      );
    }
  }, [weather]);
  return (
    <Fragment>
      <div className="weather-container">
        <h2 className="weather-title">Today's Weather</h2>
        <div className="weather-icon">
          <img src={weatherIcon} alt={weather.icon} />
        </div>
        <div className="weather-state">Condition: {weather.summary}</div>
        <div className="weather-temperature">
          Temperature: {weather.temperature}C
        </div>
      </div>
    </Fragment>
  );
}

export default Weather;
