/* Menu Toggle */

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
  console.log("Menu toggle clicked"); // Debugging line
  nav.classList.toggle("active"); // Toggles menu visibility
});