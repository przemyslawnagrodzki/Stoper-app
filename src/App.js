import React, { useState, useEffect } from 'react';
import Time from './Components/Time/Time';
import Button from './Components/Buttons/Buttons';
import styles from './Components/Buttons/Buttons.module.scss'

const App = () => {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState('');

  const start = () => {
    setTimer(setInterval(() => {
      setTime(prevValue => prevValue + 1)}, 1));
  };

  const stop = () => {
    clearInterval(timer);
  };

  const reset = () => {
    setTime(0);
  };

  useEffect(() => {
    return() => {
      if(timer) clearInterval(timer)
    }
  }, []);

  return (
    <div>
      <Time time={time} setTime={setTime}/>
      <span className={styles.buttonsBackground}>
        <Button action={start}>START</Button>
        <Button action={stop}>STOP</Button>
        <Button action={reset}>RESET</Button>
      </span>
    </div>
  );
};

export default App;