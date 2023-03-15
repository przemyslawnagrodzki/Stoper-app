 import styles from './Time.module.scss'

const Time = ({ time }) => {
    const formatTime = (milliseconds) => {
      const dateObj = new Date(milliseconds);
      return dateObj.toLocaleTimeString();
    };
  
    return (
      <div className={styles.timer}>
        {formatTime(time)}
      </div>
    );
  };

export default Time