import { useParams } from "react-router";
import { useState, useCallback, useEffect } from "react";
import TopImage from "../Common/TopImage/TopImage";
import ArticleContent from "./ArticleContent/ArticleContent";
import "./Article.css";
import ImageSlider from "../Common/ImageSlider/ImageSlider";

function Article() {
  const articleId = useParams().articleId;
  const [slides, setSlides] = useState([{ image: "/logo.png" }]);
  const imageSliderSetSlides = useCallback(
    (val) => {
      setSlides(val);
    },
    [setSlides]
  );
  const [articleTitle, setArticleTitle] = useState("Title");
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_STORAGE_ACCOUNT_URL}/content/articlesContent/${articleId}/metadata.json`
    )
      .then((r) => r.json())
      .then((r) => setArticleTitle(r["articleTitle"]));
  }, [articleId]);
  return (
    <div className="article">
      <TopImage
        imagePath={`${process.env.REACT_APP_STORAGE_ACCOUNT_URL}/content/articlesContent/${articleId}/top${articleId}.jpg`}
        imageText={articleTitle}
      />
      <ArticleContent
        articleId={articleId}
        imageSliderSetSlides={imageSliderSetSlides}
      />
      <ImageSlider slides={slides} />
    </div>
  );
}

export default Article;
