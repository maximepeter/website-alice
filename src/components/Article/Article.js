import { useParams } from "react-router";
import TopImage from "../Common/TopImage/TopImage";
import ArticleContent from "./ArticleContent/ArticleContent";
import "./Article.css";
import ImageSlider from "../Common/ImageSlider/ImageSlider";

// TO DO : Image slider
// I believe the best way to do is to have a hidden carousel on this component and avtive it with the correct slider id.
// After It will be needed to find the correct array for this Id and display the images

function Article() {
  const articleId = useParams().articleId;
  return (
    <div className="article">
      <TopImage
        imagePath={
          "/articlesContent/" + articleId + "/top" + articleId + ".jpg"
        }
        imageText={articleId}
      />
      <ArticleContent articleId={articleId} />
      <ImageSlider />
    </div>
  );
}

export default Article;
