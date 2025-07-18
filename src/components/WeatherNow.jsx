import React from 'react';
import './WeatherNow.css';

const WeatherNow = ({ data }) => {
  return (
    <div className="weather-now">
      <h2>{data.name}</h2>
      <h3>{data.weather[0].main}</h3>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
        alt="weather-icon"
      />
      <h1>{Math.round(data.main.temp)}°C</h1>
      <p>Feels like: {Math.round(data.main.feels_like)}°C</p>
      <p>Humidity: {data.main.humidity}%</p>
    </div>
  );
};

export default WeatherNow;
