import ArticleCell from "./components/Article/ArticleContent/ArticleCell/ArticleCell";
import TableOfContentItem from "./components/Common/TableOfContentItem/TableOfContentItem";

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

export function calculateImageSide(cellIndex) {
  if (cellIndex % 2 === 0) {
    return "right";
  } else {
    return "left";
  }
}

export function createArticleCell(
  cellIndex,
  cellTitle,
  cellSubtitle,
  articleUrl,
  imageSide,
  imageSliderSetSlides
) {
  return (
    <ArticleCell
      imageMetadataUrl={articleUrl + "/cell" + cellIndex + "/metadata.json"}
      textPath={articleUrl + "/cell" + cellIndex + "/content.html"}
      title={cellTitle}
      subtitle={cellSubtitle}
      imagePosition={imageSide}
      key={cellTitle + cellIndex}
      imageSliderSetSlides={imageSliderSetSlides}
    />
  );
}
export async function appendTableOfContent(arr, renderedTableOfContent) {
  arr.map((elmt, idx) =>
    renderedTableOfContent.push(
      <TableOfContentItem title={elmt.title} idx={idx} />
    )
  );
}
export async function appendArticles(
  cells,
  renderedArticles,
  articleUrl,
  imageSliderSetSlides
) {
  cells.map((cell, idx) => {
    let cellIndex = idx + 1;
    let imageSide;
    imageSide = calculateImageSide(cellIndex);
    renderedArticles.push(
      createArticleCell(
        cellIndex,
        cell.title,
        cell.subtitle,
        articleUrl,
        imageSide,
        imageSliderSetSlides
      )
    );
    return 0;
  });
}

export function displayImageSlider() {
  document.getElementById("imageSlider").classList.toggle("show");
  document.body.classList.toggle("noscroll");
}

export function hideImageSlider() {
  document.getElementById("imageSlider").classList.remove("show");
  document.body.classList.remove("noscroll");
}
