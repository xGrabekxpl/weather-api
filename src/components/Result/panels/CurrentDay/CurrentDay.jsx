import React from 'react';

import locationIcon from './assets/location-pin.png';
import './CurrentDay.css';

const CurrentDay = ({ weekday, date, location, temperature, weatherIcon, weatherDescription }) => {
  return (
    <div className="currentDay">
      <div className="currentDay-img"></div>
      <div className="currentDay-gradient"></div>
      <div className="currentDay-content">
        <div>
          <h2 className="currentDay-weekday">{weekday}</h2>
          <p className="currentDay-date">{date}</p>
          <p className="currentDay-location">
            <img src={locationIcon} className="currentDay-location-pin" alt="" />
            <span className="currentDay-location-span">{location}</span>
          </p>
        </div>
        <div>
          <img className="currentDay-weatherIcon" src={weatherIcon} alt="" />
          <h2 className="currentDay-temperature">{temperature}°C</h2>
          <h5 className="currentDay-weatherDescription">{weatherDescription}</h5>
        </div>
      </div>
    </div>
  );
};

export default CurrentDay;