import React from 'react';
import { weatherMapping } from './WeatherMapping';

const WeatherDetail = ({weatherDetail, cityname}) => {
  return (
    <>
        <div className="weatherdetail-cityname">{cityname}</div>
        <div className="weatherdetail-weather">
            <div className="weatherdetail-weathericon-container">
                <img className="weather-icon" src={weatherMapping[weatherDetail?.weather]}/>
            </div>
            
            <div className="weatherdetail-weathertext">{weatherDetail?.message}</div>
        </div>
    </>
  )
}

export default WeatherDetail