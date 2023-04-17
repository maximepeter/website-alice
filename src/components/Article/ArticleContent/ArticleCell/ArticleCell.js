import "./ArticleCell.css";
import { useState, useEffect } from "react";
import { displayImageSlider } from "../../../../utils/utils";
import { fetchBlobToJson } from "../../../../utils/utils";

function ArticleCell(props) {
  const [imageUrlsandAlts, setImageUrlsandAlts] = useState([{ image: "" }]);
  const [displayedImages, setDisplayedImages] = useState([
    <img src="" alt="" />,
  ]);

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
      const textSize = document.getElementById("cell-" + props.title).innerHTML
        .length;
      const imagesToDisplay = Math.floor(textSize / 1300);
      const displayedImages = [];
      for (let i = 0; i <= imagesToDisplay; i++) {
        displayedImages.push(
          <img
            src={r["images"][i]["imageUrl"]}
            alt={r["images"][i]["imageAlt"]}
          />
        );
      }
      setImageUrlsandAlts(r["images"]);
      setDisplayedImages(displayedImages);
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
        {displayedImages.map((img) => img)}
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
