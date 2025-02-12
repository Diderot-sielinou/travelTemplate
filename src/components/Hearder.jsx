

export default function Hearder() {
  // let navigate = useNavigate();
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
                src="https://s3-alpha-sig.figma.com/img/7b44/3779/e00233c67a961c8bfdf2e37a4a1ceb1b?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kSucIDsCJ4YRwWgVpTDmWihHBBih6D-PEKWVyyCkezgGGHoLoDpD7fjgePAMnNtDsSeuTdHCgxt5F~3po6wOfglP~6oiHUxd-9WSdID~8xyaEbtsY96Lj3B0UTx8Q3kpDI40e3UGeDdn7pskddHJcNnUnSmQ7QYdjuDyaqWQrVLlA7ArUCVAWyprCJ4nuW3wfgjC0XxqcmNgWUPpLELbtwr1PHJD4xLi2ae5hto0rDOWhyDxrN73CLuLcGGiK0E6VyxLBBm9qbFLuCXUlzCa62prEucle5t52rbwa4SpQgvkHxd4CAB0qgFk9XzR5b99DWBF9lI0j-TX1ZapxLaW9A__"
                alt="logo"
              />
            </div>
            <div className="nav">
              <ul className="nav-list d-flex align-items-center ">
                <li className="nav-item">
                {/* <Link to="/">Login again</Link> */}
                  <a href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a href="About">About</a>
                </li>
                <li className="nav-item">
                  <a href="package">Tour package</a>
                </li>
                <li className="nav-item">
                  <a href="galery">Gallery Blog</a>
                </li>
                <li className="nav-item">
                  <a href="contact">Contact Us</a>
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
