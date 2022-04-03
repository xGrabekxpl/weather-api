import { useState } from 'react';

import getCurrentDayForecast from '../helpers/getCurrentDayForecast';
import getCurrentDayDetailedForecast from '../helpers/getCurrentDayDetailedForecast';
import getUpcomingDaysForecast from '../helpers/getUpcomingDaysForecast';

import axios from 'axios';

const BASE_URL = 'https://www.metaweather.com/api/location';
const CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com';
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;

const useForecast = () => {

  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [forecast, setForecast] = useState(null);

  const getWoeid = async (location) => {
    const { data } = await axios(`${REQUEST_URL}/search`, { params: { query: location } });

    if(!data || data.length === 0) {
      setError("Nie ma takiego miasta");
      setLoading(false);
      return;
    }

    return data[0];
  }

  const getForecastData = async (woeid) => {
    const { data } = await axios(`${REQUEST_URL}/${woeid}`);
    
    if(!data || data.length === 0) {
      setError("Coś poszło nie tak, spróbuj ponownie!");
      setLoading(false);
      return;
    }

    return data;
  }

  const submitRequest = async (location) => {
    setLoading(true);
    setError(false);

    const response = await getWoeid(location);
    if(!response?.woeid) return;

    const data = await getForecastData(response.woeid);
    if(!data) return;

    gatherForcastData(data);
  }

  const gatherForcastData = (data) => {
    const currentDay = getCurrentDayForecast(data.consolidated_weather[0], data.title);
    const currentDayDetails = getCurrentDayDetailedForecast(data.consolidated_weather[0]);
    const upcomingDays = getUpcomingDaysForecast(data.consolidated_weather);

    console.log({data});
    setForecast({ currentDay, currentDayDetails, upcomingDays });
    setLoading(false);
  }

  const searchWeb = () => {
    setLoading(false);
    setError(false);
    setForecast(null);
  }

  return { isError, isLoading, forecast, submitRequest, searchWeb};

};

export default useForecast;