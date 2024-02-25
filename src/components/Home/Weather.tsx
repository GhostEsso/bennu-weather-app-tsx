import React, { useState } from "react";
import "./weather.css";

const Weather: React.FC = () => {
  const [liftedCards, setLiftedCards] = useState<boolean[]>(Array(5).fill(false));

  const toggleCardLift = (index: number) => {
    const updatedLiftedCards = liftedCards.map((card, i) =>
      i === index ? !card : false
    );
    setLiftedCards(updatedLiftedCards);
  };

  const generateWeatherCards = (numCards: number) => {
    const times = ["12AM", "9AM", "10PM"];
    const icons = [
      "wi-day-sunny",
      "wi-snow",
      "wi-day-sleet-storm",
      "wi-night-alt-storm-showers",
      "wi-day-sprinkle",
    ];
    const temperatures = ["26°C", "28°C", "24°C", "30°C"];

    const cards: JSX.Element[] = [];

    for (let i = 0; i < numCards; i++) {
      const randomTime = times[Math.floor(Math.random() * times.length)];
      const randomIcon = icons[Math.floor(Math.random() * icons.length)];
      const randomTemperature =
        temperatures[Math.floor(Math.random() * temperatures.length)];

      const isCardLifted = liftedCards[i];

      cards.push(
        <div
          key={i}
          className={`weather-details ${isCardLifted ? "lifted" : ""}`}
          onClick={() => toggleCardLift(i)}
        >
          <div className="weather-time">{randomTime}</div>
          <div className={`weather-icon ${isCardLifted ? "lifted-icon" : ""}`}>
            <i
              className={`wi ${randomIcon} ${
                isCardLifted ? "lifted-icon" : ""
              }`}
            ></i>
          </div>
          <div className="weather-temperature">{randomTemperature}</div>
        </div>
      );
    }

    return cards;
  };

  return (
    <div className="weather-container">
      <div className="weather-header">
        <div className="today">
          Today <br />
          <span className="dote"></span>
        </div>
        <div className="tomorrow">Tomorrow</div>
        <a href="/second-page" className="next">
          Next 7 Days <span className="arrow">&gt;</span>
        </a>
      </div>

      <div className="weather">{generateWeatherCards(5)}</div>
    </div>
  );
};

export default Weather;
