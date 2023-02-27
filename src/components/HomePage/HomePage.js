import "./HomePage.css";
import TopImage from "../Common/TopImage/TopImage";
import HomeContent from "./HomeContent/HomeContent";

function HomePage() {
  return (
    <div className="homePage">
      <TopImage
        imagePath="https://lefuretblancstorage.blob.core.windows.net/content/topHomePhoto.jpg"
        imageText=""
      />
      <HomeContent />
    </div>
  );
}

export default HomePage;
