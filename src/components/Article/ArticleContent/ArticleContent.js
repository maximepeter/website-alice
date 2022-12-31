import "./ArticleContent.css";
import ArticleCell from "./ArticleCell/ArticleCell";
import { useEffect, useState } from "react";
import { transformMetadata } from "../../../utils";

const renderedTableOfContent = [];
const renderedArticles = [];

// TO DO : Here is the code for a image slider. I believe the best way to do is to have a hidden carousel on this component and avtive it with the correct slider id. After It will be needed to find the correct array for this Id and display th images :)

function ArticleContent(props) {
  const [tableOfContent, setTableOfContent] = useState(<li>Loading</li>);
  const [articles, setArticles] = useState(
    <ArticleCell
      image=""
      textPath=""
      title="Test"
      cellId={1}
      imagePosition="left"
    />
  );

  useEffect(() => {
    const fetchMetadata = async () => {
      const response = await fetch(
        "/articlesContent/" + props.articleId + "/metadata.json"
      );

      try {
        const metadataJson = await response.json();
        transformMetadata(
          metadataJson,
          props.articleId,
          renderedTableOfContent,
          renderedArticles
        );
        setTableOfContent(renderedTableOfContent);
        setArticles(renderedArticles);
      } catch (e) {
        console.log("Error when fetching the metadata !");
        setTableOfContent([]);
        setArticles([]);
      }
    };
    fetchMetadata();
  }, [props.articleId]);

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
