
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
                src="src/assets/logo.jpeg"
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
