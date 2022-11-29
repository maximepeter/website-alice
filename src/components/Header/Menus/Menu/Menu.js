import "./Menu.css";
import { useEffect } from "react";
import ButtonMenu from "./ButtonMenu/ButtonMenu";
import DropDownMenu from "./DropDownMenu/DropDownMenu";
import {
  clearAllDropdownsState,
  clearAllMenusState,
  isClickedOnMenu,
} from "../../../../utils";

function Menu(props) {
  let menuType = props.menuInfos.categoryType;
  let menuId = "menu-" + menuType;
  useEffect(() => {
    const menuClick = (event, menuType) => {
      console.log(event.target);
      console.log(event.target.matches(".svg-triangle"));
      var clickedOnMenu = isClickedOnMenu(event);
      if (clickedOnMenu) {
        console.log("In the matrix !");
        clearAllMenusState();
        document.getElementById(menuId).classList.add("menu-selected");
        clearAllDropdownsState();
        let dropDownId = "myDropdown" + menuType;
        document.getElementById(dropDownId).classList.toggle("show");
      }
    };
    // EventListener creation
    document
      .getElementById(menuId)
      .addEventListener("click", (event) => menuClick(event, menuType));
    return () => {
      document
        .getElementById(menuId)
        .removeEventListener("click", () => menuClick(menuType));
    };
  }, [menuId, menuType]);

  return (
    <div className="menu" id={"menu-" + menuType}>
      <ButtonMenu menuType={menuType} />
      {/* TO DO : Undertstqnd how to center the dropdown menu */}
      <DropDownMenu categoryInfos={props.menuInfos} />
    </div>
  );
}

export default Menu;
