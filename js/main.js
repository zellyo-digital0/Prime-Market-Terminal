window.addEventListener("scroll", function () {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (window.pageYOffset > 200) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

document
  .getElementById("scrollToTopBtn")
  .addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

/* when modal is opened */
document
  .querySelector("#open-modal-button")
  .addEventListener("click", function () {
    document.querySelector("#modal-container").style.display = "block";
    document.querySelector("body").style.overflow = "hidden";
  });

/* when modal is closed */
document
  .querySelector("#close-modal-button")
  .addEventListener("click", function () {
    document.querySelector("#modal-container").style.display = "none";
    document.querySelector("body").style.overflow = "visible";
  });
