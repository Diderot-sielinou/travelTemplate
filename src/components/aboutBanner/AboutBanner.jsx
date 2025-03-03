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
          src="https://s3-alpha-sig.figma.com/img/4ff2/5fbb/d22801330eccf9aaeedf7388f729ecdf?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=W81MKxc-wYR7KKO3S978yhPrz0qBCX8rRVfDL11~EVSd6S3rJUiGVZcatvAVoRM4ixEoqZMjDNN4b5TuvpwURPLJWeuWaHerdDNKuc04Kmt3bkTXqKoARmqiYpo6iCnNrkzm2HzpEFJjPvHy-KYMKrxIQ2ufgKF46rIv~UPwDw1qmq0rpIjAjX4MwbGLm26HwsaCeiKzPePo~y45aoc8e~IJ43bahyctRB~f-redwiHt3H7vsWQ62wIRbD2~7IzbFotPV9Vn6qLRUhkFFYRQJkyhaFClghxA9MgbVsLiVsjE~BBKZmpAuyalr3fQ5~Naftax2f~26zTZojYv3fqzVA__"          alt="about banner"
          />
        </div>
      </div>
      <Attachement></Attachement>
    </div>
  );
}
