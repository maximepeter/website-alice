export function isClickedOnMenu(event) {
  var clickedOnMenu =
    event.target.matches(".buttonMenu") ||
    event.target.matches(".menuLabel") ||
    event.target.matches(".dropDownMenu") ||
    event.target.matches(".dropDownItem") ||
    event.target.matches(".svg-container") ||
    event.target.matches(".svg-triangle");
  return clickedOnMenu;
}

export function clearAllDropdownsState() {
  var dropdowns = document.getElementsByClassName("dropDownMenu");
  var j;
  for (j = 0; j < dropdowns.length; j++) {
    var currentDropdown = dropdowns[j];
    if (currentDropdown.classList.contains("show")) {
      currentDropdown.classList.remove("show");
    }
  }
}

export function clearAllMenusState() {
  var menus = document.getElementsByClassName("menu");
  var i;
  for (i = 0; i < menus.length; i++) {
    var currentMenu = menus[i];

    currentMenu.classList.remove("menu-selected");
  }
}
