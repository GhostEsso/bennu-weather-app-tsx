// Temperature.tsx
import React from "react";
import "./Temperature.css";

const Temperature: React.FC = () => {
  return (
    <div className="temperature">
      <div className="days">
        <div className="tue">
          <h1>TUE</h1>
          <h2>54%</h2>
        </div>
        <div className="wed">
          <h1>WED</h1>
          <h2>54%</h2>
        </div>
        <div className="thu">
          <h1>THU</h1>
          <h2>54%</h2>
        </div>
        <div className="fri">
          <h1>FRI</h1>
          <h2>54%</h2>
        </div>
        <div className="sat">
          <h1>SAT</h1>
          <h2>54%</h2>
        </div>
        <div className="sun">
          <h1>SUN</h1>
          <h2>54%</h2>
        </div>
      </div>

      <div className="clouds">
        <div className="cloudy">
          <i className="wi wi-day-cloudy"></i>
        </div>
        <div className="cloudy">
          <i className="wi wi-day-sunny"></i>
        </div>
        <div className="cloudy">
          <i className="wi wi-day-hail"></i>
        </div>
        <div className="cloudy">
          <i className="wi wi-day-sleet-storm"></i>
        </div>
        <div className="cloudy">
          <i className="wi wi-day-lightning"></i>
        </div>
        <div className="cloudy">
          <i className="wi wi-day-cloudy"></i>
        </div>
      </div>
      <div className="degrees">
        <div className="one">
          <h1>15°C</h1>
        </div>
        <div className="two">
          <h1>19°C</h1>
        </div>
        <div className="three">
          <h1>29°C</h1>
        </div>
        <div className="four">
          <h1>25°C</h1>
        </div>
        <div className="five">
          <h1>14°C</h1>
        </div>
        <div className="six">
          <h1>18°C</h1>
        </div>
      </div>

      <div className="we">
        <div className="num">
          20°C
        </div>
        <div className="sunz">
          <div className="weather-bar"></div>
        </div>
        <div className="ra">
          <div className="weather-bar"></div>
        </div>
        <div className="he-ra">
          <div className="weather-bar"></div>
        </div>
        <div className="sunz">
          <div className="weather-bar"></div>
        </div>
        <div className="ra">
          <div className="weather-bar"></div>
        </div>
        <div className="he-ra">
          <div className="weather-bar"></div>
        </div>
      </div>

      <div className="degre">
        <div className="on">
          <h1>24°C</h1>
        </div>
        <div className="tw">
          <h1>28°C</h1>
        </div>
        <div className="thre">
          <h1>25°C</h1>
        </div>
        <div className="fou">
          <h1>21°C</h1>
        </div>
        <div className="fiv">
          <h1>18°C</h1>
        </div>
        <div className="si">
          <h1>24°C</h1>
        </div>
      </div>
    </div>
  );
};

export default Temperature;
