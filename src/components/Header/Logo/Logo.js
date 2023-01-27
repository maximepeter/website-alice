import "./Logo.css";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link className="logo" to="/">
      <img alt="Website's logo" src="/logo.png" />
    </Link>
  );
}

export default Logo;
