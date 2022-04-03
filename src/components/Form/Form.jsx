import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Form.css';

const Form = ({ submitSearch }) => {

  const [city, setCity] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    if(!city || city === '') return;
    submitSearch(city);
  }

  return (
    <form onSubmit={onSubmit} className='form'>
      <div className="form-content">
        <input 
          type="text" 
          className='form-input'
          placeholder='Podaj miasto...'
          value={city}
          onChange={e => setCity(e.target.value)}
          autoCapitalize="sentences"
        />
        <button className='form-button' onClick={onSubmit}>SZUKAJ</button>
      </div>
    </form>
  );
};

Form.propTypes = {
  submitSearch: PropTypes.func.isRequired
}

export default Form;