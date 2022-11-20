import "./SubCategoryDropDown.css";

function SubCategoryDropdown(props) {
  return (
    <div className="subcategory">
      <div className="subcategory-title">{props.subCategoryType}</div>
      <div className="item-list">
        {props.items.map((item) => (
          <div className="dropDownItem" key={item.itemTitle}>
            {item.itemTitle}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubCategoryDropdown;
