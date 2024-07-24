document.addEventListener("DOMContentLoaded", (event) => {
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const body = document.body;

  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Update the aria-label based on the current mode
    if (body.classList.contains("dark-mode")) {
      darkModeToggle.setAttribute("aria-label", "Switch to light mode");
    } else {
      darkModeToggle.setAttribute("aria-label", "Switch to dark mode");
    }
  });
});
