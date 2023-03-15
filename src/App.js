import React, { useState, useEffect } from 'react';
import Time from './Components/Time/Time';
import { ButtonStart, ButtonStop, ButtonReset } from './Components/Buttons/Buttons';
import styles from './Components/Buttons/Buttons.module.scss'

const App = () => {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    return () => clearInterval(intervalId);
  }, [intervalId]);

  return (
    <div>
      <Time time={time} setTime={setTime} intervalId={intervalId} setIntervalId={setIntervalId} />
      <span className={styles.buttonsBackground}>
        <ButtonStart intervalId={intervalId} setTime={setTime} setIntervalId={setIntervalId} />
        <ButtonStop intervalId={intervalId} clearIntervalId={setIntervalId} />
        <ButtonReset intervalId={intervalId} resetTimer={() => setTime(0)} />
      </span>
    </div>
  );
};

export default App;