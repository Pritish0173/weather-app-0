import { useState } from 'react';
import './App.css';
import Loader from './Loader/Loader';
import Tab from './Tab/Tab';
import data from './Weather.json';
import WeatherDetail from './WeatherDetail/WeatherDetail';

function App() {

  const [input, setInput] = useState('');

  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabSelection = (id) => {
    setSelectedTab(id);
  }
  
  return (
    <div className="App">
      <div className="app-header">
        Weather Forecast
      </div>
      <div className="textinput-container">
        <input type="text" className="textinput" placeholder='Enter the City Name' value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
      <button type="button" className="submit-city">Get Forecast</button>

      <div className="tabs-container">
        {data?.list?.map((weatherInfo, index) => {
          return <Tab key={index} id={index} selectedTab={selectedTab} handleTabSelection={handleTabSelection} weatherInfo={weatherInfo}/>
        })}
      </div> 

      {/* <div className="loader-container"><Loader/></div> */}

     
      <div className="weather-details-container">
        <WeatherDetail weatherDetail={data?.list?.[selectedTab]} cityname={data?.city?.name}/>
      </div>
    </div>
  );
}

export default App;
