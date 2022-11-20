import "./DropDownMenu.css";
import SubCategoryDropdown from "./SubCategoryDropDown/SubCategoryDropDown";

function DropDownMenu(props) {
  let subCategories = props.categoryInfos.subCategories;
  return (
    <div
      id={"myDropdown" + props.categoryInfos.categoryType}
      className="dropDownMenu"
    >
      {subCategories.map((subCategory) => (
        <SubCategoryDropdown
          key={subCategory.subCategoryType}
          subCategoryType={subCategory.subCategoryType}
          items={subCategory.items}
        />
      ))}
    </div>
  );
}

export default DropDownMenu;
