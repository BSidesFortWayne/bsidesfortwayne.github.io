/**
 * Theming.
 *
 * Supports the preferred color scheme of the operation system as well as
 * the theme choice of the user.
 *
 */
const themeToggle = document.querySelector(".theme-toggle");
// Force dark mode for all users
const chosenTheme = "dark";
const chosenThemeIsDark = true;
const chosenThemeIsLight = false;

// Detect the color scheme the operating system prefers.
function detectOSColorTheme() {
  // Always set to dark mode
  document.documentElement.setAttribute("data-theme", "dark");
}

// Switch the theme.
function switchTheme(e) {
  // Always keep theme as dark
  localStorage.setItem("theme", "dark");
  detectOSColorTheme();
  window.location.reload();
}

// Event listener
if (themeToggle) {
  themeToggle.addEventListener("click", switchTheme, false);
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => e.matches && detectOSColorTheme());
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => e.matches && detectOSColorTheme());

  detectOSColorTheme();
} else {
  localStorage.removeItem("theme");
}
