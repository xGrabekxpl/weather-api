import React from 'react';

import Reset from './components/Reset/Reset';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Error from './components/Error/Error';
import Loading from './components/Loading/Loading';
import Result from './components/Result/Result';

import useForecast from './hooks/useForecast';
import './App.css';

const App = () => {

  const { isError, isLoading, forecast, submitRequest, searchWeb} = useForecast();

  const onSumbit = (value) => {
    submitRequest(value);
  }

  return (
    <div>
      {/* Main container */}
      <div className="container">

        {!forecast && (
            <div className="search">
              {/* Header (Weather App) */}
              {!isLoading && <Header />}

              {/* Form */}
              {!isLoading && <Form submitSearch={onSumbit}/>}

              {/* Error (no city found) */}
              {isError && <Error message={isError}/>}

              {/* Loading page */}
              {isLoading && <Loading />}
            </div>
        )}

        {/* Forecast page */}
        {forecast && <Result forecast={forecast} />}

      </div>

      {/* Reset button */}
      {forecast && !isLoading && (
        <Reset onCLick={searchWeb} />
      )}

    </div>
    
  );
};

export default App;