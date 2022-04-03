import React from 'react';

import './Error.css';

const Error = ({ message }) => (

  <div className='error-div'>
      <h1 className='error-h1'>{message}</h1>
  </div>

);

export default Error;