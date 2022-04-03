import React from 'react';

import CurrentDay from './panels/CurrentDay/CurrentDay';
import CurrentDayDetails from './panels/CurrentDayDetails/CurrentDayDetails';
import UpcomingDays from './panels/UpcomingDays/UpcomingDays';

import './Result.css';

const Result = ({ forecast }) => {
  return (
    <div className="result">
      <CurrentDay {...forecast.currentDay} />
      <CurrentDayDetails forecast={forecast.currentDayDetails} />
      <UpcomingDays days={forecast.upcomingDays} />
    </div>
  );
};

export default Result;