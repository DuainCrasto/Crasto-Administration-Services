const navLinks = document.getElementById("navLinks");
const openMenuIcon = document.getElementById("openMenu");
const closeMenuIcon = document.getElementById("closeMenu");
const overlay = document.getElementById("overlay");

function openMenu() {
  navLinks.classList.add("nav-open");
  overlay.style.display = "block"; // Show the overlay
}

function closeMenu() {
  navLinks.classList.remove("nav-open");
  overlay.style.display = "none"; // Hide the overlay
}
