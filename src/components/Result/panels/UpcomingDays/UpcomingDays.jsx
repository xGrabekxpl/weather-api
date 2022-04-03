import React from 'react';

import './UpcomingDays.css';

const imgUrlBase = 'https://www.metaweather.com/static/';

const UpcomingDays = ({ days }) => (
  <div className="UpcomingDays">
    <div className='UpcomingDays-list'>
      {days.map(day => (
        <div className={`UpcomingDays-day`} key={day.weekday}>
          <img className="UpcomingDays-img" src={`${imgUrlBase}img/weather/${day.imgUrl}.svg`} alt="" />
          <span className="UpcomingDays-weekday">{day.weekday}</span>
          <span className="UpcomingDays-temperature">{day.temperature}&deg;</span>
        </div>
      ))}
    </div>
  </div>
  
);

export default UpcomingDays;