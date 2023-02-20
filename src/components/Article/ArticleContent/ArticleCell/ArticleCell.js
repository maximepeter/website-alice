import "./ArticleCell.css";
import { useState, useEffect } from "react";
import { displayImageSlider } from "../../../../utils";

function ArticleCell(props) {
  const [imageUrlsandAlts, setImageUrls] = useState([{ image: "" }]);

  useEffect(() => {
    fetch(props.textPath)
      .then((r) => r.text())
      .then((text) => {
        document.getElementById("cell-" + props.title).innerHTML = text;
      });
    function fetchMetadata(url) {
      const outputJson = fetch(url).then((response) => response.json());
      return outputJson;
    }
    fetchMetadata(props.imageMetadataUrl).then((r) =>
      setImageUrls(r["images"])
    );
  }, [props.cellId, props.imageMetadataUrl, props.textPath, props.title]);
  return (
    <div className={"article-cell picture-" + props.imagePosition}>
      <div
        className="article-cell-picture"
        onClick={() => {
          props.imageSliderSetSlides(imageUrlsandAlts);
          displayImageSlider(props.imageSliderSetSlides);
        }}
      >
        <img
          src={imageUrlsandAlts[0]["imageUrl"]}
          alt={imageUrlsandAlts[0]["imageAlt"]}
          loading="lazy"
        />
        <div className="overlayBlock">
          <div className="overlayText">Plus ...</div>
        </div>
      </div>
      <div className="article-cell-content">
        <h2 className="article-cell-text-title"> {props.title}</h2>
        <div className="article-cell-text-subtitle">{props.subtitle}</div>
        <div className="article-cell-text" id={"cell-" + props.title}></div>
      </div>
    </div>
  );
}

export default ArticleCell;
