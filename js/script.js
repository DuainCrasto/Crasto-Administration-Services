// Stores references to DOM elements for the navigation links, open/close menu icons, and overlay.

const navLinks = document.getElementById("navLinks");
const openMenuIcon = document.getElementById("openMenu");
const closeMenuIcon = document.getElementById("closeMenu");
const overlay = document.getElementById("overlay");

// Opens the navigation menu.

// Adds the "nav-open" class to the `navLinks` element and displays the overlay.

function openMenu() {
  navLinks.classList.add("nav-open");
  overlay.style.display = "block"; // Show the overlay
}

// Closes the navigation menu.

// Removes the "nav-open" class from the `navLinks` element and hides the overlay.

function closeMenu() {
  navLinks.classList.remove("nav-open");
  overlay.style.display = "none"; // Hide the overlay
}

// Focuses the first input field on page load if the URL hash is "#section2".

if (window.location.hash === "#section2") {
  window.addEventListener("load", function () {
    const nameInput = document.querySelector('input[name="name"]');
    if (nameInput) {
      nameInput.focus();
    }
  });
}
