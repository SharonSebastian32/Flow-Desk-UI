import React, { useState, useEffect } from "react";
import AOS from "aos";
import "./Effeciency.scss";
import "aos/dist/aos.css";

AOS.init();

function CircularProgressBar({ percentage, color }) {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  const radius = 35;
  const strokeWidth = 4;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset =
    circumference - (animatedPercentage / 100) * circumference;

  useEffect(() => {
    const animationDuration = 1500;
    const steps = 60;
    const stepTime = animationDuration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep += 1;
      const newPercentage = (currentStep / steps) * percentage;

      setAnimatedPercentage(newPercentage);

      if (currentStep >= steps) {
        setAnimatedPercentage(percentage);
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [percentage]);

  return (
    <svg height={radius * 2} width={radius * 2} className="circular-svg">
      <circle
        stroke="#E6E6E6"
        fill="transparent"
        strokeWidth={strokeWidth}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />

      <circle
        stroke={color}
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference + " " + circumference}
        style={{ strokeDashoffset }}
        strokeLinecap="round"
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        transform={`rotate(-90 ${radius} ${radius})`}
      />

      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="14"
        fontWeight="500"
        fontFamily="Montserrat"
      >
        {Math.round(animatedPercentage * 10) / 10}%
      </text>
    </svg>
  );
}

function Effeciency() {
  const EffeciencyData = [
    {
      id: 1,
      title: "Effeciency",
      percentage: 40,
      progressBarColor: "#252C58",
    },
    {
      id: 2,
      title: "Activity",
      percentage: 94.7,
      progressBarColor: "#FFAB00",
    },
    {
      id: 3,
      title: "Total Working",
      percentage: 94.7,
      progressBarColor: "#00A76F",
    },
  ];

  return (
    <div className="Eff-container">
      {EffeciencyData.map((item) => (
        <div
          className="Eff-sub-container"
          key={item.id}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="Eff-title-container">
            <div className="Eff-title">{item.title}</div>
            <div className="Eff-percentage">{item.percentage}</div>
          </div>
          <CircularProgressBar
            percentage={item.percentage}
            color={item.progressBarColor}
          />
        </div>
      ))}
    </div>
  );
}

export default Effeciency;
