import styles from "./Header.module.css";

export default function Header(props) {
  return (
    <div className={styles.header}>
      <img src={props.img} className={styles.logo} alt="logo" />
      <h3 className={styles.title}>{props.title}</h3>
    </div>
  );
}
