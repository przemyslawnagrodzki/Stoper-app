import React, { useRef } from 'react';
import styles from './Buttons.module.scss'

export const ButtonStop = ({ clearIntervalId, intervalId }) => {
  const handleClick = () => {
    clearInterval(intervalId);
    clearIntervalId(null);
  };

  return (
    <button className={styles.button} onClick={handleClick}>Stop</button>
  );
};

export const ButtonReset = ({ resetTimer }) => {
    const handleClick = () => {
        resetTimer(0);
    };

    return (
        <button className={styles.button} onClick={handleClick}>Reset</button>
    );
};

export const ButtonStart = ({ setTime, setIntervalId }) => {
  const intervalRef = useRef(null);

  const handleClick = () => {
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1);
    setIntervalId(intervalRef.current);
  };

  return (
    <button className={styles.button}  onClick={handleClick}>Start</button>
  );
};


