import "./SubCategoryDropDown.css";
import { Link } from "react-router-dom";

function SubCategoryDropdown(props) {
  return (
    <div className="subcategory">
      <div className="subcategory-title">{props.subCategoryType}</div>
      <div className="item-list">
        {props.items.map((item) => (
          <div className="dropDownItem" key={item.itemTitle}>
            <Link className="dropdown-link" to={"/article" + item.itemId}>
              {item.itemTitle}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubCategoryDropdown;
