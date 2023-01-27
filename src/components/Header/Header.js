import "./Header.css";
import Logo from "./Logo/Logo";
import Menus from "./Menus/Menus";
import HeaderButton from "./HeaderButton/HeaderButton";

function Header() {
  return (
    <div className="header">
      <Logo />
      <HeaderButton text="Acceuil" url="/" />
      <Menus />
      <HeaderButton text="Contact" url="/contact" />
    </div>
  );
}

export default Header;
