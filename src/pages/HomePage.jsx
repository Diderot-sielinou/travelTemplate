import AboutCart from "../components/aboutCart/AboutCart";
import { aboutHome, homeCart } from "../components/constants";
import { popularHome } from "../components/constants";
import HomeBanner from "../components/hommeBannner/HomeBanner";
import PackageCart from "../components/pakageCart/PackageCart";
import PopularCart from "../components/popularCart/PopularCart";
import TextComponents from "../components/textComponents/TextComponents";
import WhyCart from "../components/whyCart/WhyCart";

export default function HomePage() {
  return (
    <div className="">
      <HomeBanner />
      <TextComponents>
        <h4>Choose your Package</h4>
        <h3>Select your Best Package for your Travel</h3>
      </TextComponents>
      <div className="packageContainer">
        {homeCart.map((item) => {
          return <PackageCart key={item.title} item={item} />;
        })}
      </div>
      <TextComponents>
        <h4>Popular Destinations</h4>
        <h3>Select Our Best Popular Destinations</h3>
      </TextComponents>
      <div className="Destinations">
        {popularHome.map((item) => {
          return <PopularCart key={item.title} item={item} />;
        })}
      </div>
      <TextComponents>
        <h4>Why us?</h4>
        <h3>Why Travel with Africa wizzy Safari</h3>
      </TextComponents>
      <div className="whyContainer">
        <WhyCart>
          <span className="material-icons-sharp">directions_car</span>
          <p>100+ tours around Rwanda</p>
        </WhyCart>
        <WhyCart>
          <span className="material-icons-sharp">watch_later</span>
          <p>100% Trusted travel agency</p>
        </WhyCart>
        <WhyCart>
          <span className="material-icons-sharp">calendar_month</span>
          <p>10 years of travel experience</p>
        </WhyCart>
        <WhyCart>
          <span className="material-icons-sharp">thumb_up</span>
          <p>90% of travelors are happy</p>
        </WhyCart>
      </div>
      <TextComponents>
        <h4>Our Traveller Say</h4>
        <h3>What our clients say about us</h3>
      </TextComponents>
      <div className="aboutContainer mb-5 ">
        {
          aboutHome.map(item=>{
            return(<AboutCart key = {item.title} item={item}/>)
          })
        }
      </div>
    </div>
  );
}
