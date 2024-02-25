// Panel.tsx
import React from "react";
import "./Panel.css";

const Panel: React.FC = () => {
  return (
    <div className="Panel">
      <div className="first">
        <div className="monday">
          <h3>Monday</h3>
        </div>
        <div className="cloudy">
          <i className="wi wi-day-cloudy"></i>
        </div>
        <div className="temperature1">
            <h5>26°C</h5>
        </div>
        <div className="temperature2">
            <h6>19°C</h6>
        </div>
      </div>
      <div className="second">
        <div className="wind">
            <h3>Wind</h3>
        </div>
        <div className="km">
            <h3>12m/h</h3>
        </div>
        <div className="humidity">
            <h3>Humidity</h3>
        </div>
        <div className="percent">
            <h3>55%</h3>
        </div>
      </div>
      <div className="third">
        <div className="visibility">
            <h3>Visibility</h3>
        </div>
        <div className="kml">
            <h3>25m/h</h3>
        </div>
        <div className="uv">
            <h3>UV</h3>
        </div>
        <div className="one">
            <h3>1</h3>
        </div>
      </div>
    </div>
  );
};

export default Panel;
