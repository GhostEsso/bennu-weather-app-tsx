import React from 'react';
import "./dashboard.css";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <div className="rain-icon">
        <i className="wi wi-rain"></i>Today
      </div>
      <div className="today-info">
        <div className="day-date">Thu, 23 Feb</div>
        <div className="temperature">
          28<span className="c">°C</span>
        </div>
        <div className="location">
          Lomé, Togo
        </div>
        <div className="edit-icon">
          <i className="bi bi-pencil"></i>
        </div>
        <div className="feels-like">
          Feels like 33 <span className="dot"></span> Sunset 20:15
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
