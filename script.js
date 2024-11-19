const pcMenu = document.querySelector(".header-menu");
const phoneMenuBtn = document.getElementById("phone-menu-btn");
const overlay = document.querySelector(".overlay");
const phoneMenu = document.querySelector(".phone-menu");
const closeBtn = document.getElementById("close-menu-btn");

phoneMenuBtn.addEventListener("click", function () {
  overlay.style.display = "block";
  phoneMenu.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  overlay.style.display = "none";
  phoneMenu.style.display = "none";
});

overlay.addEventListener("click", function () {
  overlay.style.display = "none";
  phoneMenu.style.display = "none";
});
