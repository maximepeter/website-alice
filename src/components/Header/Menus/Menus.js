import "./Menus.css";
import Menu from "./Menu/Menu";
import { menusInfos } from "../../../temp/tempCategoriesData";
function Menus() {
  return (
    <div className="menus">
      <Menu menuInfos={menusInfos[0]} />
      <Menu menuInfos={menusInfos[1]} />
      <Menu menuInfos={menusInfos[2]} />
    </div>
  );
}

export default Menus;
