import "./ArticleContent.css";
import ArticleCell from "./ArticleCell/ArticleCell";
import { useEffect, useState } from "react";
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
        // addEventListenersForClass("article-cell-picture");
      } catch (e) {
        console.log("Error when fetching the metadata !");
        setTableOfContent([]);
        setArticles([]);
      }
    };
    const contentCreation = createContent();
    contentCreation.then((r) => {});
  }, [props.articleId, props.imageSliderSetSlides]);

  return (
    <div className="article-content">
      <div className="article-head-container">
        <div className="article-map">
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
      <div className="head-summary">Test</div>
      <div id="cell-container">{articles}</div>
    </div>
  );
}

export default ArticleContent;
