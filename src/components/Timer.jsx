import React, { useState, useEffect } from "react";

const Timer = ({ duration, onTime }) => {
  const [seconds, setSeconds] = useState(parseInt(duration) * 60);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 3) {
          clearInterval(intervalId);
          onTime();
          return;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Convert seconds to hours, minutes, and remaining seconds
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div className="timer">
      <h3>Time left</h3>
      <h2>{`${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${remainingSeconds
        .toString()
        .padStart(2, "0")}`}</h2>
    </div>
  );
};

export default Timer;
