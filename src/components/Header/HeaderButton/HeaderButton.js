import "./HeaderButton.css";
import { Link } from "react-router-dom";

function HeaderButton(props) {
  return (
    <Link className="contactButton" to={props.url}>
      <div className="contactText">{props.text}</div>
    </Link>
  );
}

export default HeaderButton;
