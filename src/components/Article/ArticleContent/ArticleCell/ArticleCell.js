import "./ArticleCell.css";
import { useState, useEffect } from "react";
import { displayImageSlider } from "../../../../utils/utils";
import { fetchBlobToJson } from "../../../../utils/utils";

function ArticleCell(props) {
  const [imageUrlsandAlts, setImageUrls] = useState([{ image: "" }]);

  useEffect(() => {
    fetch(props.textPath)
      .then((r) => r.text())
      .then((text) => {
        document.getElementById("cell-" + props.title).innerHTML = text;
      });
    fetchBlobToJson(props.imageMetadataUrl).then((r) => {
      r["images"].map(
        (elmt) =>
          (elmt[
            "imageUrl"
          ] = `${process.env.REACT_APP_STORAGE_ACCOUNT_URL}/content${elmt["imageUrl"]}`)
      );
      setImageUrls(r["images"]);
    });
  }, [props.cellId, props.imageMetadataUrl, props.textPath, props.title]);
  return (
    <div
      id={encodeURI(props.title)}
      className={"article-cell picture-" + props.imagePosition}
    >
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
        />
        <div className="overlayBlock">
          <div className="overlayText">Plus ...</div>
        </div>
      </div>
      <div className="article-cell-content">
        <div className="article-cell-text-title"> {props.title}</div>
        <div className="article-cell-text-subtitle">{props.subtitle}</div>
        <div className="article-cell-text" id={"cell-" + props.title}></div>
      </div>
    </div>
  );
}

export default ArticleCell;
