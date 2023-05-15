import "./HomePage.css";
import TopImage from "../Common/TopImage/TopImage";
import HomeContent from "./HomeContent/HomeContent";
import { Helmet } from "react-helmet-async";

function HomePage() {
  return (
    <div className="homePage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Le Furet Blanc | Acceuil</title>
        <meta name="description" content="Page d'acceuil du furet blanc." />
        <meta property="og:title" content="Le Furet Blanc | Acceuil" />
        <meta
          property="og:description"
          content="Page d'acceuil du furet blanc."
        />
      </Helmet>
      <TopImage
        imagePath={`${process.env.REACT_APP_STORAGE_ACCOUNT_URL}/content/topHomePhoto.jpg`}
        imageText=""
      />
      <HomeContent />
    </div>
  );
}

export default HomePage;
