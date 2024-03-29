import "./Menu.css";
import { useEffect } from "react";
import ButtonMenu from "./ButtonMenu/ButtonMenu";
import DropDownMenu from "./DropDownMenu/DropDownMenu";
import {
  clearAllDropdownsState,
  clearAllMenusState,
  isClickedOnMenu,
} from "../../../../utils/utils";

function Menu(props) {
  let menuType = props.menuInfos.categoryType;
  let menuId = "menu-" + menuType;
  useEffect(() => {
    const menuClick = (event, menuType) => {
      var clickedOnMenu = isClickedOnMenu(event);
      if (clickedOnMenu) {
        clearAllMenusState();
        document.getElementById(menuId).classList.add("menu-selected");
        clearAllDropdownsState();
        document
          .getElementById("myDropdown" + menuType)
          .classList.toggle("show");
      }
    };
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
      <DropDownMenu categoryInfos={props.menuInfos} />
    </div>
  );
}

export default Menu;
