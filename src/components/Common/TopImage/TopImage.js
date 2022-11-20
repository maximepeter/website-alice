import "./TopImage.css";

function TopImage(props) {
  return (
    <div className="topImage">
      <img alt="Top landscape" src={props.imagePath} />
    </div>
  );
}

export default TopImage;
