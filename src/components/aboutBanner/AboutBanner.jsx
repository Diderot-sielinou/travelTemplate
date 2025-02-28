import Attachement from "../attachement/Attachement";
import styles from "./about-banner.module.css";


export default function AboutBanner() {
  return (
    <div className={styles.AboutBanner}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1>
            We are dedicated to <br />
            providing the best <br /> travel experience.{" "}
          </h1>
          <p>Discover the Land of a Thousand Hills</p>
        </div>
        <div className={styles.image}>
          <img
          src="src/assets/about1.jpeg"          alt="about banner"
          />
        </div>
      </div>
      <Attachement></Attachement>
    </div>
  );
}
