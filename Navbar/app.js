const button = document.querySelector("button");
const links = document.querySelector(".links");
button.addEventListener("click", () => {
  if (links.classList.contains("show-links")) {
    links.classList.remove("show-links");
  } else {
    links.classList.add("show-links");
  }
});
