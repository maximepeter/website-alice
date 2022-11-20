import "./HomePage.css";
import TopImage from "../Common/TopImage/TopImage";
import HomeContent from "./HomeContent/HomeContent";

function HomePage() {
  return (
    <div className="homePage">
      <TopImage imagePath="/topHomePhoto.jpg" />
      <HomeContent />
    </div>
  );
}

export default HomePage;
