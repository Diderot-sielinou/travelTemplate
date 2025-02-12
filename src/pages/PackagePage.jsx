import Banner from "../components/banner/Banner";
import TextComponents from "../components/textComponents/TextComponents";
import { homeCart } from "../components/constants";
import PackageCart from "../components/pakageCart/PackageCart";

export default function PackagePage() {
  return (
    <div>
      <Banner>
        <h1>Tour Package</h1>
        <div className="d-flex align-items-center justify-content-space-around g-4 mx-3">
          <a href="/">Home</a>
          <i className="bx bxs-right-arrow"></i>
          <span>Tour Package</span>
        </div>
      </Banner>
      <TextComponents>
        <h4>Choose your Package</h4>
        <h3>Select your Best Package for your Travel</h3>
      </TextComponents>
      <div className="packageContainer">
        {homeCart.map((item,index) => {
          return <PackageCart key={index} item={item} />;
        })}
      </div>
      <div className="packageContainer">
        {homeCart.map((item,index) => {
          return <PackageCart key={index} item={item} />;
        })}
      </div>
    </div>
  );
}
