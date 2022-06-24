import styles from "./Card.module.css";
import location from "../../images/location.png";

export default function Card(props) {
  return (
    <div className={styles.container}>
      <img
        src={props.item.coverImg}
        alt={props.item.title}
        className={styles.img}
      />

      <div className={styles.location}>
        <img src={location} alt="location icon" className={styles.locImg} />
        <p className={styles.place}>{props.item.location}</p>
        <a className={styles.map} href="https://www.google.com/maps">
          View on Google Maps
        </a>
      </div>
      <h1 className={styles.heading}>{props.item.title}</h1>
      <p className={styles.date}>{props.item.date}</p>
      <p className={styles.description}>{props.item.description}</p>
    </div>
  );
}
