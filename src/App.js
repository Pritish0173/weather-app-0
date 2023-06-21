import { useState } from "react";
import "./App.css";
import Loader from "./Loader/Loader";
import Tab from "./Tab/Tab";
import WeatherDetail from "./WeatherDetail/WeatherDetail";
import axios from "axios";

function App() {
  const [input, setInput] = useState("");

  const [selectedTab, setSelectedTab] = useState(0);

  const [weatherData, setWeatherData] = useState(null);

  const [loading, setLoading] = useState(false);

  const handleTabSelection = (id) => {
    setSelectedTab(id);
  };

  const handleGetForecast = () => {
    setWeatherData(null);
    setLoading(true);

    axios
      .get(
        `http://aa6d8698c32134bc39d15e7dabd27f05-1066716756.us-east-2.elb.amazonaws.com:8083/myweatherapp/weatherforecastprovider/retrieve-forecast?city=${input}&count=3`
      )
      .then((response) => {
        setWeatherData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <div className="App">
      <div className="app-header">Weather Forecast</div>
      <div className="textinput-container">
        <input
          type="text"
          className="textinput"
          placeholder="Enter the City Name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <button type="button" className="submit-city" onClick={handleGetForecast}>
        Get Forecast
      </button>

      {loading && (
        <div className="loader-container">
          <Loader />
        </div>
      )}

      {weatherData && (
        <>
          {weatherData?.errocode === "01" ? (
            <div className="weatherdetail-weathertext">Forecast not found</div>
          ) : (
            <>
              <div className="weatherdetail-weathertext">
                {weatherData?.apiResponse?.weatherCondition}
              </div>
              <div className="tabs-container">
                {weatherData?.apiResponse?.list?.slice(0,3).map((weatherInfo, index) => {
                  return (
                    <Tab
                      key={index}
                      id={index}
                      selectedTab={selectedTab}
                      handleTabSelection={handleTabSelection}
                      weatherInfo={weatherInfo}
                    />
                  );
                })}
              </div>
              <div className="weather-details-container">
                <WeatherDetail
                  weatherDetail={weatherData?.apiResponse?.list?.[selectedTab]}
                  cityname={weatherData?.apiResponse?.city?.name}
                />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
