import "./Header.css";
import Logo from "./Logo/Logo";
import Menus from "./Menus/Menus";
import ContactButton from "./ContactButton/ContactButton";

function Header() {
  return (
    <div className="header">
      <Logo />
      <Menus />
      <ContactButton />
    </div>
  );
}

export default Header;
