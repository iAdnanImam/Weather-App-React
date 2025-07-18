import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import WeatherNow from './components/WeatherNow';
import Forecast from './components/Forecast';
import SearchBar from './components/SearchBar';

const App = () => {
  const [city, setCity] = useState('Ranchi');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);

  const fetchWeather = async (searchCity) => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    try {
      const weatherRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${apiKey}&units=metric`
      );
      const forecastRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&appid=${apiKey}&units=metric`
      );
      setWeatherData(weatherRes.data);
      setForecastData(forecastRes.data.list.filter((_, i) => i % 8 === 0));
    } catch (err) {
      console.error("City not found");
      setCity("City not found!");
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  return (
    <div className="app-container">
      <h1>Weather App</h1>
      <SearchBar onSearch={fetchWeather} />
      <div className="weather-sections">
        {weatherData && <WeatherNow data={weatherData} />}
        {forecastData.length > 0 && <Forecast data={forecastData} />}
      </div>
    </div>
  );
};

export default App;
