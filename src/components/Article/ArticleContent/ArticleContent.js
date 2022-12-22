import "./ArticleContent.css";
import ArticleCell from "./ArticleCell/ArticleCell";
import { useEffect, useState } from "react";
import { createArticleCell, calculateImageSide } from "../../../utils";

const renderedTableOfContent = [];
const renderedArticles = [];

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
      const metadataJson = await response.json();
      const cells = metadataJson.cells;
      cells.map((cell, idx) => {
        let cellIndex = idx + 1;
        let imageSide;
        renderedTableOfContent.push(<li key={idx}>{cell.title}</li>);
        imageSide = calculateImageSide(cellIndex);
        renderedArticles.push(
          createArticleCell(
            props.articleId,
            cellIndex,
            cell.title,
            cell.subtitle,
            imageSide
          )
        );
        return 0;
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
