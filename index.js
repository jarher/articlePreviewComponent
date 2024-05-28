const shareIconContainer = document.querySelector(".share-icon-container");

shareIconContainer.addEventListener(
  "click",
  function () {
    document
      .querySelector(".share-content")
      .classList.toggle("share-content-up");
    this.classList.toggle("share-icon-on");
  },
  false
);
