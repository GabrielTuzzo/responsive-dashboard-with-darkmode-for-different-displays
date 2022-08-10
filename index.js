const themeButton = document.querySelector("#theme-selector");
const menuDrop = document.querySelector("#dropMenu");
const listDrop = document.querySelector("#ul-list");

/*-----------------------------Dark Mode-----------------------------*/

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  //add and remove the class name
  themeButton.querySelector(".fa-moon").classList.toggle("selected");
  themeButton.querySelector(".fa-sun").classList.toggle("selected");
});

/*--------------Menu Dropdown--------------*/

menuDrop.addEventListener("click", () => {
  listDrop.classList.toggle("active");
  menuDrop.classList.toggle("active");
});
