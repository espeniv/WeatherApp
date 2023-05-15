import "./WeatherForecast.css";
import { useEffect, useState } from "react";
import {
  getDateDay,
  getDateMonth,
  getIcon,
  kelvinToCelsius,
} from "../../utils/utils.js";

const WeatherForecast = ({ locationData }) => {
  const [weatherForecast, setWeatherForecast] = useState();

  useEffect(() => {
    if (locationData != "") {
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${locationData.lat}&lon=${locationData.lon}&appid=a2e7a4db0b6d7af071db8e1f1adaa70c`
      )
        .then((res) => res.json())
        .then((data) => {
          const forecast = [];
          for (let i = 8; i <= 40; i += 8) {
            forecast.push({
              temp: data.list[i - 1].main.temp,
              description: data.list[i - 1].weather[0].description,
            });
          }
          setWeatherForecast(forecast);
        })
        .catch((error) => console.log(error));
    }
  }, [locationData]);

  return (
    weatherForecast && (
      <div className="weather-forecast">
        <h1 className="weather-forecast-title">Forecast</h1>
        {weatherForecast.map((forecastData, index) => (
          <div key={index} className="weather-forecast">
            <div className="each-day">
              <div className="date">{`${
                parseInt(getDateDay()) + (index + 1)
              }/${getDateMonth()}`}</div>
              <p>|</p>
              <div className="temperature">
                {Math.round(kelvinToCelsius(forecastData.temp))}&deg;C
              </div>
              <p>|</p>
              <div className="description">{forecastData.description}</div>
              <p>|</p>
              <img src={getIcon(forecastData)} alt="Weather Icon" />
            </div>
          </div>
        ))}
      </div>
    )
  );
};

export default WeatherForecast;
