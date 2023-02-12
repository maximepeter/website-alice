import "./ArticleSummary.css";

function ArticleSummary(props) {
  return (
    <div className="head-summary">
      <div className="head-summary-cell">
        <div className="head-summary-item">
          <b>Période conseillée :</b> {props.recommendedSeason}
        </div>
        <div className="head-summary-item">
          <b>Dénivelé positif total :</b> {props.totalPositiveElevation} m
        </div>
        <div className="head-summary-item">
          <b>Dénivelé négatif total :</b> {props.totalNegativeElevation} m
        </div>
        <div className="head-summary-item">
          <b>Distance totale :</b> {props.totalDistance} km
        </div>
      </div>
      <div className="head-summary-cell">TO DO</div>
    </div>
  );
}

export default ArticleSummary;
