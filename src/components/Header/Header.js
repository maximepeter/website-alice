import "./Header.css";
import Logo from "./Logo/Logo";
import Menus from "./Menus/Menus";
import Button from "../Common/Button/Button.js";

function Header() {
  return (
    <div className="header">
      <Logo />
      <Button text="Accueil" url="/" />
      <Menus />
      <Button text="Contact" url="/contact" />
    </div>
  );
}

export default Header;
