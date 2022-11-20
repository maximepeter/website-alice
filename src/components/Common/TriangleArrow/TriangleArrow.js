import "./TriangleArrow.css";

function TriangleArrow() {
  return (
    <div className="svg-container">
      <svg id="triangle" viewBox="0 0 100 100">
        <polygon points="50 13.397, 100 100, 0 100" />
      </svg>
    </div>
  );
}

export default TriangleArrow;
