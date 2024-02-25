// Rain.tsx
import React from 'react';
import './rain.css';

const Rain: React.FC = () => {
  return (
    <div className="rain">
      <h3>Chance of rain</h3>
      <div className="weather">
        <div className="sunny">
          <p>sunny</p>
          <p>rainy</p>
          <p>
            heavy <br /> 
            rainy
          </p>
        </div>
        <div className="graphs">
          <div className="barometer sunny" title="10AM"></div>
          <div className="barometer rainy" title="12AM"></div>
          <div className="barometer heavy-rainy" title="2PM"></div>
          <div className="barometer rainy" title="4PM"></div>
          <div className="barometer sunny" title="6PM"></div>
        </div>
      </div>
      <div className="hours">
        <p>10AM</p>
        <p>12AM</p>
        <p>2PM</p>
        <p>6PM</p>
        <p>8PM</p>
      </div>
      <div className="barre-laterale">
        <hr />
      </div>
    </div>
  );
};

export default Rain;
