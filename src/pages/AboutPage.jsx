import AboutCartComponent from "../components/about/AboutCartComponent";
import AboutBanner from "../components/aboutBanner/AboutBanner";
import { aboutData } from "../components/constants";

export default function AboutPage() {
  return (
    <div>
      <AboutBanner/>
      <div className="about-container">
        <h1>Welcome to Africa Wizzy Safari</h1>
        <div className="line"></div>
        {
          aboutData.map(item=>{
            return(<AboutCartComponent key={item.src} item={item}/>)
          })
        }
      </div>
    </div>
  )
}
