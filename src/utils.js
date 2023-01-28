import ArticleCell from "./components/Article/ArticleContent/ArticleCell/ArticleCell";

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
  articleId,
  cellIndex,
  cellTitle,
  cellSubtitle,
  imageSide
) {
  return (
    <ArticleCell
      image={
        "articlesContent/" + articleId + "/cell" + cellIndex + "/image.jpg"
      }
      textPath={
        "articlesContent/" + articleId + "/cell" + cellIndex + "/content.txt"
      }
      title={cellTitle}
      subtitle={cellSubtitle}
      cellId={cellIndex}
      imagePosition={imageSide}
      key={cellIndex}
    />
  );
}

export async function appendArticlesAndContent(
  metadataJson,
  articleId,
  renderedTableOfContent,
  renderedArticles
) {
  const cells = metadataJson.cells;
  cells.map((cell, idx) => {
    let cellIndex = idx + 1;
    let imageSide;
    renderedTableOfContent.push(<li key={idx}>{cell.title}</li>);
    imageSide = calculateImageSide(cellIndex);
    renderedArticles.push(
      createArticleCell(
        articleId,
        cellIndex,
        cell.title,
        cell.subtitle,
        imageSide
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
