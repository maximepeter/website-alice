import "./Menus.css";
import Menu from "./Menu/Menu";
import { useState, useEffect } from "react";

const renderedMenus = [];

function Menus() {
  const [menus, setMenus] = useState(<div>Loading</div>);
  useEffect(() => {
    const fetchMenuInfos = async () => {
      const response = await fetch(
        "https://lefuretblancstorage.blob.core.windows.net/content/menuInfos.json"
      );
      const menuInfos = await response.json();
      menuInfos.map((menuInfos, idx) =>
        renderedMenus.push(<Menu key={idx} menuInfos={menuInfos} />)
      );
      setMenus(renderedMenus);
    };
    fetchMenuInfos();
  }, []);
  return <div className="menus">{menus}</div>;
}

export default Menus;
