import "./Button.css";
import { Link } from "react-router-dom";

function Button(props) {
  return (
    <Link className="button" to={props.url} onClick={props.onClick}>
      <div className="text">{props.text}</div>
    </Link>
  );
}

export default Button;
