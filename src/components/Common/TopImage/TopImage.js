import "./TopImage.css";

function TopImage(props) {
  const imageText = props.imageText;
  const imagePath = props.imagePath;
  return (
    <div className="topImage">
      <img alt="Top landscape" src={imagePath} />
      <div className="top-image-text">{imageText}</div>
    </div>
  );
}

export default TopImage;
