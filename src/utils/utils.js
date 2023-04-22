import ArticleCell from "./../components/Article/ArticleContent/ArticleCell/ArticleCell";
import TableOfContentItem from "./../components/Common/TableOfContentItem/TableOfContentItem";

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

export function sendMail() {
  const inputMessage = document.getElementById(
    "contact-textarea-message"
  ).value;
  const inputMail = document.getElementById("contact-textarea-mail").value;
  const logicAppUrl =
    "https://prod-222.westeurope.logic.azure.com:443/workflows/f1136d18ba67472db40910294ae37c3c/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=VqUEEJvxJ9H5ycyxUsLs25wIaCaJI03s4VhNzm2yAwA";
  const postOptions = {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "Accept-encoding": "gzip, deflate, br",
    },
    body: JSON.stringify({
      mail: inputMail,
      text: inputMessage,
    }),
  };
  checkMail(inputMail, postOptions, logicAppUrl);
}

function checkMail(inputMail, postOptions, url) {
  const successAlerts = [...document.getElementsByClassName("success")];
  const errorAlerts = [...document.getElementsByClassName("error")];
  if (inputMail !== "") {
    fetch(url, postOptions)
      .then(() => errorAlerts.map((elmt) => elmt.classList.add("alert-hide")))
      .then(() =>
        successAlerts.map((elmt) => elmt.classList.remove("alert-hide"))
      )
      .then(() => {
        [...document.getElementsByClassName("contact-textarea")].map(
          (elmt) => (elmt.value = "")
        );
      })
      .then(
        setTimeout(
          () => successAlerts.map((elmt) => elmt.classList.add("alert-hide")),
          10000
        )
      );
  } else {
    errorAlerts.map((elmt) => elmt.classList.remove("alert-hide"));
    setTimeout(
      () => errorAlerts.map((elmt) => elmt.classList.add("alert-hide")),
      10000
    );
  }
}

export function fetchBlobToText(blobUrl) {
  const textBlob = fetch(blobUrl)
    .then((r) => r.blob())
    .then((blob) => blob.text());
  return textBlob;
}

export function fetchBlobToHtmlObject(blobUrl) {
  var htmlObject = document.createElement("");
  fetchBlobToText(blobUrl).then((text) => {
    htmlObject.innerHTML = text;
  });
  return htmlObject;
}

export function fetchBlobToJson(blobUrl) {
  return fetch(blobUrl).then((r) => r.json());
}
