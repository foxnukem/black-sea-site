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
