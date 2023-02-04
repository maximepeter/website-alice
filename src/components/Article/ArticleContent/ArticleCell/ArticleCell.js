import "./ArticleCell.css";
import { useState, useEffect } from "react";
import { displayImageSlider } from "../../../../utils";

function ArticleCell(props) {
  const [imageUrlsandAlts, setImageUrls] = useState([{ image: "" }]);

  useEffect(() => {
    fetch(props.textPath)
      .then((r) => r.text())
      .then((text) => {
        document.getElementById("cell-" + props.cellId).textContent = text;
      });
    function fetchMetadata(url) {
      const outputJson = fetch(url).then((response) => response.json());
      return outputJson;
    }
    fetchMetadata(props.imageMetadataUrl).then((r) =>
      setImageUrls(r["images"])
    );
  }, [props.cellId, props.imageMetadataUrl, props.textPath]);
  return (
    <div
      className={"article-cell picture-" + props.imagePosition}
      onClick={() => {
        props.imageSliderSetSlides(imageUrlsandAlts);
        displayImageSlider(props.imageSliderSetSlides);
      }}
    >
      <div className="article-cell-picture">
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
        <div className="article-cell-text-title"> {props.title}</div>
        <div className="article-cell-text-subtitle">{props.subtitle}</div>
        <div className="article-cell-text" id={"cell-" + props.cellId}></div>
      </div>
    </div>
  );
}

export default ArticleCell;
