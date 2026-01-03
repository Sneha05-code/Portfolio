document.addEventListener("DOMContentLoaded", () => {
  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggle) {
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true" || false;
      toggle.setAttribute("aria-expanded", (!expanded).toString());
      if (navLinks) navLinks.classList.toggle("show");
    });
  }

  // Basic form validation
  const form = document.getElementById("contactForm");
  const msg = document.getElementById("formMsg");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!form.checkValidity()) {
        if (msg) {
          msg.textContent = "Please fill in all fields correctly.";
          msg.style.color = "red";
        }
      } else {
        if (msg) {
          msg.textContent = "Message sent successfully!";
          msg.style.color = "green";
        }
        form.reset();
      }
    });
  }

  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
