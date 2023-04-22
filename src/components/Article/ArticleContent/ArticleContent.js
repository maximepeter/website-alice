import "./ArticleContent.css";
import ArticleCell from "./ArticleCell/ArticleCell";
import ArticleSummary from "./ArticleSummary/ArticleSummary";
import { useEffect, useState } from "react";
import {
  appendArticles,
  appendTableOfContent,
  fetchBlobToJson,
} from "../../../utils/utils";

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

  const articleRootUrl = `${process.env.REACT_APP_STORAGE_ACCOUNT_URL}/content/articlesContent/${props.articleId}`;
  useEffect(() => {
    // Compute the content of the articles
    const renderedTableOfContent = [];
    const renderedArticles = [];
    const metadataBlobURL = `${articleRootUrl}/metadata.json`;
    const createContent = async () => {
      const response = await fetchBlobToJson(metadataBlobURL);
      try {
        const metadataJson = await response;
        const cells = metadataJson.cells;
        switch (metadataJson.type) {
          case "trek":
            if (
              document.getElementById("article-map").classList.contains("hide")
            ) {
              document.getElementById("article-map").classList.remove("hide");
            }
            // document.getElementById("article-content").insertBefore(
            //   <ArticleSummary url={`${articleRootUrl}/articleSummary.html`} />,
            //   // document.createElement("div"),
            //   document.getElementById("article-content").children[0]
            // );

            appendTableOfContent(cells, renderedTableOfContent);
            appendArticles(
              cells,
              renderedArticles,
              `${articleRootUrl}`,
              props.imageSliderSetSlides
            );
            break;
          case "prepa":
            document.getElementById("article-map").classList.toggle("hide");
            appendTableOfContent(cells, renderedTableOfContent);
            appendArticles(
              cells,
              renderedArticles,
              `${articleRootUrl}`,
              props.imageSliderSetSlides
            );
            break;
          case "tourisme":
            const groupsOfCells = metadataJson.groupsOfCells;
            appendTableOfContent(groupsOfCells, renderedTableOfContent);
            groupsOfCells.map((group, idx) => {
              renderedArticles.push(
                <h2 key={group.title + idx} id={encodeURI(group.title)}>
                  {group.title}
                </h2>
              );
              appendArticles(
                group.cells,
                renderedArticles,
                `${articleRootUrl}/${group.title}`,
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
      } catch (error) {
        console.error("Error when fetching the metadata !");
        console.error(error);
        setTableOfContent([]);
        setArticles([]);
      }
    };
    createContent().then((r) => {});
  }, [props.articleId, props.imageSliderSetSlides, articleRootUrl]);

  return (
    <div id="article-content">
      <div className="article-head-container">
        <div id="article-map">
          <img
            src={`${articleRootUrl}/map${props.articleId}.jpg`}
            alt={props.articleId + " map"}
          />
        </div>
        <div id="article-table-of-contents">
          <ul id="table-of-content">{tableOfContent}</ul>
        </div>
      </div>
      <ArticleSummary url={`${articleRootUrl}/articleSummary.html`} />
      <div id="cell-container">{articles}</div>
    </div>
  );
}

export default ArticleContent;
