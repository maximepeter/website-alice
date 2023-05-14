import "./TopImage.css";

function TopImage(props) {
  const imageText = props.imageText;
  const imagePath = props.imagePath;
  return (
    <div className="topImage">
      <img alt="Top landscape" src={imagePath} loading="lazy" />
      <div className="top-image-text">
        <h1>{imageText}</h1>
      </div>
    </div>
  );
}

export default TopImage;
