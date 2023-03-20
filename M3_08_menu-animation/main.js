function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("menu-open")

  const hamburger = document.querySelector(".hamburger-menu")
  hamburger.classList.toggle("open")
}

window.addEventListener("DOMContentLoaded", function() {
  const menuBtn = document.getElementById("menuBtn");
  console.log(menuBtn);
  menuBtn.addEventListener("click", toggleMenu);

})


