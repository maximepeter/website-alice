import "./ArticleContent.css";
import ArticleCell from "./ArticleCell/ArticleCell";
import ArticleSummary from "./ArticleSummary/ArticleSummary";
import { useEffect, useState, useRef } from "react";
import { appendArticlesAndContent } from "../../../utils";

function ArticleContent(props) {
  const [tableOfContent, setTableOfContent] = useState(<li>Loading</li>);
  const [articles, setArticles] = useState(
    <ArticleCell
      image=""
      textPath=""
      title="Test"
      cellId={1}
      imagePosition="left"
      imageSliderSetSlides={props.imageSliderSetSlides}
    />
  );
  const [totalDistance, setTotalDistance] = useState(0);
  const [totalPositiveElevation, setTotalPositiveElevation] = useState(0);
  const [totalNegativeElevation, setTotalNegativeElevation] = useState(0);
  const [recommendedSeason, setRecommendedSeason] = useState("");

  useEffect(() => {
    // Compute the content of the articles
    const renderedTableOfContent = [];
    const renderedArticles = [];
    const createContent = async () => {
      const response = await fetch(
        "/articlesContent/" + props.articleId + "/metadata.json"
      );
      try {
        const metadataJson = await response.json();
        appendArticlesAndContent(
          metadataJson,
          props.articleId,
          renderedTableOfContent,
          renderedArticles,
          props.imageSliderSetSlides
        );
        setTableOfContent(renderedTableOfContent);
        setArticles(renderedArticles);
        setTotalDistance(metadataJson.totalDistance);
        setTotalPositiveElevation(metadataJson.totalPositiveElevation);
        setTotalNegativeElevation(metadataJson.totalNegativeElevation);
        setRecommendedSeason(metadataJson.recommendedSeason);
      } catch (e) {
        console.log("Error when fetching the metadata !");
        setTableOfContent([]);
        setArticles([]);
      }
    };
    const contentCreation = createContent();
    contentCreation.then((r) => {});
  }, [props.articleId, props.imageSliderSetSlides]);

  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();

  return (
    <div className="article-content">
      <div className="article-head-container">
        <div className="article-map" onClick={executeScroll}>
          <img
            src={
              "/articlesContent/" +
              props.articleId +
              "/map" +
              props.articleId +
              ".jpg"
            }
            alt={props.articleId + " map"}
          />
        </div>
        <div className="article-table-of-contents">
          <ul id="table-of-content">{tableOfContent}</ul>
        </div>
      </div>

      <ArticleSummary
        totalDistance={totalDistance}
        totalPositiveElevation={totalPositiveElevation}
        totalNegativeElevation={totalNegativeElevation}
        recommendedSeason={recommendedSeason}
      />
      <div id="cell-container">{articles}</div>
    </div>
  );
}

export default ArticleContent;
