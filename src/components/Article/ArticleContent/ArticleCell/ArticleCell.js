import "./ArticleCell.css";

function ArticleCell(props) {
  fetch(props.textPath)
    .then((r) => r.text())
    .then((text) => {
      document.getElementById("cell-" + props.cellId).textContent = text;
    });
  return (
    <div className={"article-cell picture-" + props.imagePosition}>
      <div className="article-cell-picture">
        <img src={props.image} alt={props.title + " illustration"} />
      </div>
      <div className="article-cell-content">
        <div className="article-cell-text-title"> {props.title}</div>
        <div className="article-cell-text-subtitle">{props.subtitle}</div>
        <div className="article-cell-text" id={"cell-" + props.cellId}></div>
      </div>
    </div>
  );
}

export default ArticleCell;
