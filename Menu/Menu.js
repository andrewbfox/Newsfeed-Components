
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  console.log('menu.classList: ', menu.classList);
  menu.classList.toggle("menu--open");
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");
// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", (event) => event.stopPropagation());
menuButton.addEventListener("click", toggleMenu);

// Trying to get menu to slide out when click occurs anywhere in the window:
window.addEventListener("click", () => {
  console.log(event.currentTarget);
});