
  document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('active');
     // Toggle between ☰ and ✖
    if (hamburger.textContent.trim() === "☰") {
      hamburger.textContent = "✖";
    } else {
      hamburger.textContent = "☰";
    }
  });
});