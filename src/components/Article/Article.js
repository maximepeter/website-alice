import { useParams } from "react-router";
import TopImage from "../Common/TopImage/TopImage";
import ArticleContent from "./ArticleContent/ArticleContent";
import "./Article.css";

function Article() {
  const articleId = useParams().articleId;
  return (
    <div className="article">
      <TopImage imagePath={"/top" + articleId + ".jpg"} imageText={articleId} />
      <ArticleContent articleId={articleId} />
    </div>
  );
}

export default Article;
