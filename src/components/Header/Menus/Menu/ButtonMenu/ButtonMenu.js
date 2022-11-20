import "./ButtonMenu.css";
import TriangleArrow from "../../../../Common/TriangleArrow/TriangleArrow";

function ButtonMenu(props) {
  return (
    <div className={"buttonMenu"}>
      <div className="menuLabel">{props.menuType}</div>
      <TriangleArrow />
    </div>
  );
}

export default ButtonMenu;
