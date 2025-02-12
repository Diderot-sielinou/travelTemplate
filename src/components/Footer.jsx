export default function Footer() {
  return (
    <div className="footer-container">
      <div className="row contai-foot ">
        <div className="col-6 footer1">
          <div className="row g-10 ">
            <h1>If you have any question, <br></br> Let us help you!</h1>
          </div>
          <div className="row">
            <p>
              If you have any questions or would like to <br/> book a tour with us,
              please dont hesitate <br/> to contact us.
            </p>
          </div>
          <div className="row g-10">
            <p>
              Phone: +250 788 123 456 <br/> Email: info@rwandatourism.com <br/> Address:
              Kigali, Rwanda
            </p>
          </div>
          <div className="row g-10">
            <h3>Subscribe to our newspaper</h3>
            <div className="footer-inpur d-flex align-items-center g-4 ">
              <input type="text" placeholder="Input your email here" />
              <button className="btn">
                <span className="material-icons-sharp">send</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-6 footer2">
          <div className="row">
            <div className="footer-logo col">
              <img
                src="data:image/jpeg;base64,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"
                alt="foooter logo"
              />
            </div>
            <div className="col d-flex align-items-center navicons ">
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
                <i
                  className="bx bxl-instagram"
                  style={{ color: "#ffffff" }}
                ></i>
              </div>
            </div>
          </div>
          <div className="row">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>
          </div>
          <div className="row">
            <div className="col">
              <ul className="list-footer">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
                <li>
                  <a href="#">Destinations</a>
                </li>
                <li>
                  <a href="#">signinn</a>
                </li>
              </ul>
            </div>
            <div className="col">
              <ul className="list-footer">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Packages</a>
                </li>
                <li>
                  <a href="#">Events</a>
                </li>
                <li>
                  <a href="#">Gallery</a>
                </li>
              </ul>
            </div>
            <div className="col">
              <ul className="list-footer">
                <li>
                  <a href="#">Our Team</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row footer-last">
        <p>Copyright Africa Wizzy Safari 2022</p>
      </div>
    </div>
  );
}
