import React from 'react';

import './CurrentDayDetails.css';

const CurrentDayDetails = ({ forecast }) => (
    <div className="currentDayDetails">
    <div className="currentDayDetails-content">
      {forecast.map(item => (
        <div className='currentDayDetails-info' key={item.name}>
          <p className="currentDayDetails-info-name">{item.name}</p>
          <p className="currentDayDetails-info-description">
            {item.value} {item.unit}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default CurrentDayDetails;