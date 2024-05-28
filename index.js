const shareIconContainer = document.querySelector(".share-icon-container");

shareIconContainer.addEventListener("click", (e) => {
  document.querySelector(".share-content").classList.toggle("share-content-up");
  e.target.classList.toggle("share-icon-on");
});
