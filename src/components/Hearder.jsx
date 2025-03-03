
import { Link } from "react-router";

export default function Hearder() {

  return (
    <>
      <nav className="">
        <div className="firstNav">
          <div className="firstNav-boxPhone">
            <div className="nav1-box1">
              <div className="nav-phone d-flex align-items-center g-1">
                <span className="material-icons-sharp">phone</span>
                <span className="number">+237 651831211</span>
                
              </div>
            </div>
            <div className="nav1-box2 d-flex align-items-center g-1">
              <span className="material-icons-sharp">mail</span>
              <span className="email">diderotsielinou@gmail.com</span>
            </div>
          </div>
          <div className="d-flex align-items-center navicons ">
            <div>
              <i className="bx bxl-facebook" style={{ color: "#ffffff" }}></i>
            </div>
            <div>
              <i className="bx bxl-twitter" style={{ color: "#ffffff" }}></i>
            </div>
            <div>
              <i className="bx bxl-linkedin" style={{ color: "#ffffff" }}></i>
            </div>
            <div>
              <i className="bx bxl-instagram" style={{ color: "#ffffff" }}></i>
            </div>
          </div>
        </div>
        <div className="secondNav">
          <div className="logo d-flex align-items-center">
            <div className="img-logo">
              <img
                src="https://s3-alpha-sig.figma.com/img/7b44/3779/e00233c67a961c8bfdf2e37a4a1ceb1b?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=N9504MoLA-7wKm1kFym93I881KhPBcaCFFJ1NM9GEIbqbttKV3SMj7Wgn2cyInvZXwlNxx-yFZfb0253OobXN3hp19RDVY-u4jptinWJADTA6yOHAfULmbulCfY16lrNfCjeouPe6~42xKFwHzASeRXdhvA6HpZi2-QHeRQ874jIk5yXhHDuLBYQardmJkvQuc8pHF144G7prXpVE41Q57fO3u6NYC6dY828HWrHpL1jD9DNVXlOa9Hc23z45OWvmv8GU0qIWS0qyGHuK62~qRlu90IEKTBChHsgGXfMTZQxfbtBJ2tAVhlzC1pyIYnqK0sDb3sLez6eU1F4TkOYFQ__"
                alt="logo"
              />
            </div>
            <div className="nav">
              <ul className="nav-list d-flex align-items-center ">
                <li className="nav-item">
                {/* <Link to="/">Login again</Link> */}
                <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link to="About">About</Link>

                </li>
                <li className="nav-item">

                  <Link to="package">Tour package</Link>
                </li>
                <li className="nav-item">

                  <Link to="galery">Gallery Blog</Link>
                </li>
                <li className="nav-item">

                  <Link to="Contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="sing-in">
            <button className="btn nav-btn">sign in</button>
          </div>
        </div>
      </nav>
    </>
  );
}
