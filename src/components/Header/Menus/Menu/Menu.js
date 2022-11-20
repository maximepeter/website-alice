import "./Menu.css";
import { useEffect } from "react";
import ButtonMenu from "./ButtonMenu/ButtonMenu";
import DropDownMenu from "./DropDownMenu/DropDownMenu";
import { clearAllDropdownsState, clearAllMenusState } from "../../../../utils";

function Menu(props) {
  let menuType = props.menuInfos.categoryType;
  let menuId = "menu-" + menuType;
  useEffect(() => {
    const menuClick = (event, menuType) => {
      var clickedOnMenu =
        event.target.matches(".buttonMenu") ||
        event.target.matches(".menuLabel") ||
        event.target.matches(".dropDownMenu") ||
        event.target.matches(".dropDownItem");
      if (clickedOnMenu) {
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
