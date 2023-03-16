import styles from './Buttons.module.scss'

const Button = props => (
  <button className={styles.button} onClick={props.action}>{props.children}</button>
)

export default Button;
