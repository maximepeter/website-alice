import { fetchBlobToText } from "../../../../utils/utils";
import "./ArticleSummary.css";
import { useEffect } from "react";

function ArticleSummary(props) {
  useEffect(() => {
    console.log(document.getElementById("head-summary-cell"));
    fetchBlobToText(props.url).then(
      (html) => (document.getElementById("head-summary-cell").innerHTML = html)
    );
  });
  return (
    <div id="head-summary">
      <div id="head-summary-cell"></div>
    </div>
  );
}

export default ArticleSummary;
