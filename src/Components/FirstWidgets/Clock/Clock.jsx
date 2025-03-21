import React, { useState, useEffect } from "react";
import "./Clock.scss";
import moon from "../../../assets/moon.png";
import sun from "../../../assets/sun.png";

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isDay, setIsDay] = useState(true);

  const getFormattedDate = () => {
    const date = new Date();
    const day = date.getDate();
    const suffix = ["th", "st", "nd", "rd"][
      day % 10 > 3 || (day % 100) - (day % 10) === 10 ? 0 : day % 10
    ];
    return `${day}${suffix} ${date.toLocaleString("default", {
      month: "long",
    })} ${date.getFullYear()}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const currentHour = new Date().getHours();
      setIsDay(currentHour >= 6 && currentHour < 18);
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock-container">
      <div id="sub-container">
        <img src={isDay ? sun : moon} id="sun" alt="Day/Night Icon" />
        <span id="time">
          <span id="timer">{time}</span>
          <span id="insight">Realtime Insight</span>
        </span>
      </div>

      <div className="day-date">
        <span id="today">Today: </span>
        <span id="date">{getFormattedDate()}</span>
      </div>

      <div id="view">
        <button
          id="clock-button"
          onClick={() => alert("Feature will update soon..")}
        >
          View Attendance
        </button>
      </div>
    </div>
  );
}

export default Clock;
