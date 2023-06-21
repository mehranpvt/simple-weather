import './App.scss';
import Details from './components/details/details';
import Cold from '/cold.jpeg';
import Hot from '/hot.jpeg';
import { formattedWeatherData } from './weatherService';
import { useEffect, useState } from 'react';

function App() {

  const [city, setCity] = useState('tehran');
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    async function getData() {
      const weatherData = await formattedWeatherData(city, units);
      setWeather(weatherData);
    }
    getData();
  }, [units, city]);

  function changeUnits(e) {
    const unitBTN = e.currentTarget.innerHTML.slice(1);
    setUnits(unitBTN === 'F' ? 'imperial' : 'metric');
  }

  function handleChangeCity(e) {
    setCity(e.target.value);
  }

  return (
    <div className='weather-all height-100vh flex-row-center width-100pct padding-top-16 padding-right-16 padding-left-16 box-sizing position-relative' 
    style={{
      'backgroundImage': (units === 'metric' && weather && weather.temp.toFixed() > 25) ? 
    `url(${Hot})` : (units === 'imperial' && weather && weather.temp.toFixed() > 77) ? 
    `url(${Hot})` : `url(${Cold})`}}>
      <div className="overlay position-absolute width-100pct height-100pct"></div>
      {weather && (
        <div className="weather height-100pct flex-column-space-between-center">
          
          <div className="search width-100pct flex-row-space-between-center padding-16 border-radius box-sizing">
              <input className="search-input margin-right-16 padding-left-8 border-radius font-18 font-medium" 
              type="text" placeholder="Enter City . . ."
              id="city"
              name="city"
              onChange={handleChangeCity}
              value={city}
              />
              <div className="deg flex-row-center-center border-radius pointer-cursor font-medium" onClick={changeUnits}>{units === 'metric' ? '°F' : '°C'}</div>
          </div>
          
          <div className="main-all width-100pct flex-row-space-between-center padding-16 margin-top-16 margin-bottom-16 border-radius box-sizing">
              <div className="details flex-column-space-between-center">
                  <div className="city font-24">{weather.name}, {weather.country}</div>
                  <div className="icon margin-top-16 margin-bottom-16">
                    <img src={weather.iconURL} alt="weather-state" />
                  </div>
                  <div className="state font-24">{weather.description}</div>
              </div>
              <div className="deg font-62 font-bold">{weather.temp.toFixed()} °{units === 'metric' ? 'C' : 'F'}</div>
          </div>
          
          <Details
            weather={weather} 
            units={units}
          />

        </div>
      )}
    </div>
  )
}

export default App
