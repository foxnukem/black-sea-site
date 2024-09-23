const Content = {
  Main: "Main",
  Pisces: "Pisces",
  Mammals: "Mammals",
  Invertebrates: "Invertebrates",
  Flora: "Flora",
};

function showPage(title) {
  const visibleElements = document.getElementsByClassName("content");

  for (let i = 0; i < visibleElements.length; i++) {
    visibleElements[i].style.display = "none";
  }

  const pageToShow = document.getElementById(title);

  if (pageToShow.style.display !== "") {
    pageToShow.style.display = "";
  }
}

async function getFileContentAsText(file) {
  const response = await fetch(file);
  const fileContent = await response.text();
  return fileContent;
}

async function insertContentsFromFiles() {
  const tbl = document.querySelectorAll("[data-src]");
  for (let i = 0; i < tbl.length; i++)
    tbl[i].innerHTML = await getFileContentAsText(tbl[i].dataset.src);
}

insertContentsFromFiles();