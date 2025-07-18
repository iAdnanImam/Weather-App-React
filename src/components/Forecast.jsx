import React from 'react';
import WeatherCard from './WeatherCard';
import './Forecast.css';

const Forecast = ({ data }) => {
  return (
    <div className="forecast-container">
      <h2>5-Day Forecast</h2>
      <div className="forecast-grid">
        {data.map((item, index) => (
          <WeatherCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Forecast;
