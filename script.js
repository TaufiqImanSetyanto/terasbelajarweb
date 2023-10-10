const galeryBox = document.querySelectorAll(".galery img");
galeryBox[0].addEventListener("click", function () {
  galeryBox[0].classList.add("klik");
});
galeryBox[1].addEventListener("click", function () {
  galeryBox[0].classList.add("klik");
});
galeryBox[2].addEventListener("click", function () {
  galeryBox[0].classList.remove("klik");
});
galeryBox[3].addEventListener("click", function () {
  galeryBox[0].classList.remove("klik");
});
