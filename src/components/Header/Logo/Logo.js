import "./Logo.css";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link className="logo" to="/">
      <img
        alt="Website's logo"
        src={`${process.env.REACT_APP_STORAGE_ACCOUNT_URL}/content/logo.png`}
      />
    </Link>
  );
}

export default Logo;
