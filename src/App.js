import { useState } from "react";
import "./App.css";
import Loader from "./Loader/Loader";
import Tab from "./Tab/Tab";
import data from "./Weather.json";
import WeatherDetail from "./WeatherDetail/WeatherDetail";

function App() {
  const [input, setInput] = useState("");

  const [selectedTab, setSelectedTab] = useState(0);

  const [weatherData, setWeatherData] = useState(null);

  const [loading, setLoading] = useState(false);

  const handleTabSelection = (id) => {
    setSelectedTab(id);
  };

  const handleGetForecast = () => {
    setLoading(true);
    setTimeout(() => {
      setWeatherData(data);
      setLoading(false);
    }, 2000);
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

      {/* <div className="loader-container"><Loader/></div> */}

      {weatherData && (
        <>
          <div className="weatherdetail-weathertext">
            {weatherData?.apiResponse?.weatherCondition}
          </div>
          <div className="tabs-container">
            {weatherData?.apiResponse?.list?.map((weatherInfo, index) => {
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
    </div>
  );
}

export default App;
