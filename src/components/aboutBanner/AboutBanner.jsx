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
            src="https://s3-alpha-sig.figma.com/img/4ff2/5fbb/d22801330eccf9aaeedf7388f729ecdf?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZTTtcA7umDxF2EKykhyQ2uyykn-mTE2DzNVFc5lMgwHCD8K2wK7oO3dzX-PIwC70gzpE-2qXuUO2D4HdJuaEAAOHJN8cXFknPUM0Mb6vNZOnrsBEaliVODTTrdsydZvu67~~~2VGTiQK4Avs9X4gVs-v2b250SjTzJh7XeIn70vmVcqUX5u0cvq~V3iGhf8HYpFt3oBE6zT0NoUz4rbdSGKDxKC4iXKJWhEG9Mjo0l8JSobSoGq49nsBaXezkz--3ajxBaiWgUM-20Kd4hk8Af6LGX0BIsieZJlrMTmhJu8HaUBJlzRlA0LQxT1Y7Sfp2HFWSgs3tQg--oqMHVfaHw__"
            alt="about banner"
          />
        </div>
      </div>
      <Attachement></Attachement>
    </div>
  );
}
