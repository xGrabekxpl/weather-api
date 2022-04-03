import React from 'react';

import './Reset.css';

const Reset = ({ onCLick }) => {

  const onClick = () => {
    onCLick();
  }

  return (
    <button onClick={onClick} className="reset-button">
      <span className="glyphicon">&#xe014;</span>
    </button>
  );
};

export default Reset;