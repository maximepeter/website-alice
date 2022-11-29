import "./ArticleContent.css";

function ArticleContent(props) {
  return (
    <div className="article-content">
      <div className="article-head-container">
        <div className="article-map">
          <img src="/mapGR20.png" alt="GR20 map" />
        </div>
        <div className="article-table-of-contents">
          <ol>
            <li>Etape 1</li>
            <li>Etape 2</li>
            <li>Etape 3</li>
            <li>Etape 4</li>
          </ol>
        </div>
      </div>
      Content of the article {props.articleId}
    </div>
  );
}

export default ArticleContent;
