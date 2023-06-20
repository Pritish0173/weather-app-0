import React from 'react';
import { weatherMapping } from './WeatherMapping';

const WeatherDetail = ({weatherDetail, cityname}) => {

  const kelvinToCelsius = (temperature) => {
    const convertedTemperature = temperature - 273.15;
    const numString = (Math.round(convertedTemperature * 100) / 100).toFixed(1).toString();
    return Number(numString);
  }

  return (
    <>
        <div className="weatherdetail-cityname">{cityname}</div>
        <div className="weatherdetail-weather">
            <div className="weatherdetail-weathericon-container">
                <img className="weather-icon" src={weatherMapping[weatherDetail?.weather?.[0]?.main]}/>
            </div>
            
            <div className="weatherdetail-info">
              <div>Temp: {kelvinToCelsius(weatherDetail?.main?.temp)}°C</div>
              <div>Max Temp: {kelvinToCelsius(weatherDetail?.main?.temp_max)}°C</div>
              <div>Min Temp: {kelvinToCelsius(weatherDetail?.main?.temp_min)}°C</div>
            </div>
        </div>
    </>
  )
}

export default WeatherDetail