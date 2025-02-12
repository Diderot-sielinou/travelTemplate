import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import Hearder from "./components/Hearder";
import { BrowserRouter, Routes, Route} from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PackagePage from "./pages/PackagePage";
import GaleryPage from "./pages/GaleryPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Hearder/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="About" element={<AboutPage />} />
      <Route path="package" element={<PackagePage />} />
      <Route path="galery" element={<GaleryPage />} />
      <Route path="contact" element={<ContactPage />} />
    </Routes>
    <Footer/>
  </BrowserRouter>

    </>
  );
}

export default App;
