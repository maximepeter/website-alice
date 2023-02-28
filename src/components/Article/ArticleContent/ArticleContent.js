import "./ArticleContent.css";
import ArticleCell from "./ArticleCell/ArticleCell";
import ArticleSummary from "./ArticleSummary/ArticleSummary";
import { useEffect, useState, useRef } from "react";
import { appendArticles, appendTableOfContent } from "../../../utils";

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

  const articleRootUrl = `${process.env.REACT_APP_STORAGE_ACCOUNT_URL}/content/articlesContent/${props.articleId}`;
  useEffect(() => {
    // Compute the content of the articles
    const renderedTableOfContent = [];
    const renderedArticles = [];
    const metadataBlobURL = `${articleRootUrl}/metadata.json`;
    const createContent = async () => {
      const response = await fetch(metadataBlobURL)
        .then((r) => r.blob())
        .then((blob) => blob.text())
        .then((txt) => JSON.parse(txt));
      try {
        const metadataJson = await response;
        switch (metadataJson.type) {
          case "trek":
            const cells = metadataJson.cells;
            const articleUrl = `${articleRootUrl}`;
            appendTableOfContent(cells, renderedTableOfContent);
            appendArticles(
              cells,
              renderedArticles,
              articleUrl,
              props.imageSliderSetSlides
            );
            break;
          case "tourisme":
            const groupsOfCells = metadataJson.groupsOfCells;
            appendTableOfContent(groupsOfCells, renderedTableOfContent);
            groupsOfCells.map((group, idx) => {
              renderedArticles.push(
                <h2 key={group.title + idx}>{group.title}</h2>
              );
              const articleUrl = `${articleRootUrl}/${group.title}`;
              appendArticles(
                group.cells,
                renderedArticles,
                articleUrl,
                props.imageSliderSetSlides
              );
              return 0;
            });
            break;
          default:
            console.log("Article type not found.");
        }
        setTableOfContent(renderedTableOfContent);
        setArticles(renderedArticles);
        setTotalDistance(metadataJson.totalDistance);
        setTotalPositiveElevation(metadataJson.totalPositiveElevation);
        setTotalNegativeElevation(metadataJson.totalNegativeElevation);
        setRecommendedSeason(metadataJson.recommendedSeason);
      } catch (error) {
        console.error("Error when fetching the metadata !");
        console.error(error);
        setTableOfContent([]);
        setArticles([]);
      }
    };
    const contentCreation = createContent();
    contentCreation.then((r) => {});
  }, [props.articleId, props.imageSliderSetSlides, articleRootUrl]);

  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();

  return (
    <div className="article-content">
      <div className="article-head-container">
        <div className="article-map" onClick={executeScroll}>
          <img
            src={`${articleRootUrl}/map${props.articleId}.jpg`}
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
