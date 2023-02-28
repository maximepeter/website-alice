import "./HomePage.css";
import TopImage from "../Common/TopImage/TopImage";
import HomeContent from "./HomeContent/HomeContent";

function HomePage() {
  return (
    <div className="homePage">
      <TopImage
        imagePath={`${process.env.REACT_APP_STORAGE_ACCOUNT_URL}/content/topHomePhoto.jpg`}
        imageText=""
      />
      <HomeContent />
    </div>
  );
}

export default HomePage;
