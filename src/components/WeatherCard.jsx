import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ data }) => {
  const date = new Date(data.dt * 1000);
  return (
    <div className="weather-card">
      <h4>{date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</h4>
      <h4>{date.toLocaleDateString(undefined, { weekday: 'short' })}</h4>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="icon"
      />
      <p>{Math.round(data.main.temp)}°C</p>
      <p>{data.weather[0].main}</p>
    </div>
  );
};

export default WeatherCard;
