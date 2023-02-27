import "./Logo.css";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link className="logo" to="/">
      <img
        alt="Website's logo"
        src="https://lefuretblancstorage.blob.core.windows.net/content/logo.png"
      />
    </Link>
  );
}

export default Logo;
