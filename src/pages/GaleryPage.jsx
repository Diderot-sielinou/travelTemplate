import Banner from "../components/banner/Banner";
import GalleryCart from "../components/gallery/GalleryCart";

 
export default function GaleryPage() {
  return (
    <div>
      <Banner>
        <h1>Gallery</h1>
        <div className="d-flex align-items-center justify-content-space-around g-4 mx-3">
          <a href="/">Home</a>
          <i className="bx bxs-right-arrow"></i>
          <span>Gallery</span>
        </div>
      </Banner>
      <div className="galery">
        <GalleryCart/>
      </div>
    </div>
  );
}
