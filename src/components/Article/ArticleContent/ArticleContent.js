import "./ArticleContent.css";
import ArticleCell from "./ArticleCell/ArticleCell";
import { useEffect, useState } from "react";

function ArticleContent(props) {
  // TO DO : Comprendre l'infinite loop
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
  let renderedTableOfContent = [];
  let renderedArticles = [];

  useEffect(() => {
    const fetchMetadata = async () => {
      const response = await fetch(
        "/articlesContent/" + props.articleId + "/metadata.json"
      );
      const metadataJson = await response.json();
      const cells = metadataJson.cells;
      const nbCells = cells.length;
      cells.map((cell, idx) => {
        let cellIndex = idx + 1;
        let imageSide;
        renderedTableOfContent.push(<li key={idx}>{cell}</li>);
        if (cellIndex % 2 === 0) {
          imageSide = "right";
        } else {
          imageSide = "left";
        }
        renderedArticles.push(
          <ArticleCell
            image={
              "articlesContent/" +
              props.articleId +
              "/cell" +
              cellIndex +
              "/image.jpg"
            }
            textPath={
              "articlesContent/" +
              props.articleId +
              "/cell" +
              cellIndex +
              "/content.txt"
            }
            title={cell}
            cellId={idx}
            imagePosition={imageSide}
            key={idx}
          />
        );
      });
      setTableOfContent(renderedTableOfContent);
      setArticles(renderedArticles);
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
