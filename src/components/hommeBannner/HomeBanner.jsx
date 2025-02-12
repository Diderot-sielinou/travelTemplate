import styles from "./home-banner.module.css";

export default function HomeBanner() {
  return (
    <>
      <div className={styles.container}>
        <div className="banner-text">
          <div className={styles.bannerText}>
            <h1>Experience the beauty of Rwanda with us</h1>
            <p>Discover the Land of a Thousand Hills</p>
          </div>
        </div>
      <div className={styles.bannerAttach}>
        <div className={styles.bannerInput}>
          <input type="text" placeholder="Search activities or Destinations" />
          <span className="material-icons-sharp ">search</span>
        </div>
        <div className={styles.bannerInfo}>
          <div className={styles.bammerBox}>
            <div className={styles.box}>
              <span>Guestst</span>
              <p>
                2 Adult{" "}
                <span className="material-icons-sharp">expand_more</span>
              </p>
            </div>
          </div>
          <div className={styles.bammerBox}>
            <div className={styles.box}>
              <span>date</span>
              <p>
                12 - 13 April 2021
                <span className="material-icons-sharp">expand_more</span>
              </p>
            </div>
          </div>
          <div className={styles.bammerBox}>
            <div className={styles.box}>
              <span>Package</span>
              <p>
                All
                <span className="material-icons-sharp">expand_more</span>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.bannerButton}>
          <button className={styles.homeBtn}>book now</button>
        </div>
      </div>
      </div>
    </>
  );
}
