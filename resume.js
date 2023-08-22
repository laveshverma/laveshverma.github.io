const toggleBtn = document.getElementById("toggle-btn");
const navbar = document.getElementById("navbar");
const body = document.getElementById("body");
const newsBtn = document.getElementById("newsBtn");

let darkMode = localStorage.getItem("dark-mode");

if (darkMode == null) {
  localStorage.setItem("dark-mode", "enabled");
}
const enableDarkMode = () => {
  navbar.classList.add("navbar-dark");
  navbar.classList.remove("navbar-light");
  body.classList.remove("light");
  body.classList.add("dark");
  document.getElementById("toggle-btn").checked = "true";
  localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
  navbar.classList.remove("navbar-dark");
  navbar.classList.add("navbar-light");
  body.classList.add("light");
  body.classList.remove("dark");

  localStorage.setItem("dark-mode", "disabled");
};
// set state of darkMode on page load
if (darkMode == null) {
  enableDarkMode();
}

if (darkMode === "enabled") {
  enableDarkMode();
}
if (darkMode === "disabled") {
  disableDarkMode();
}

//toggle mode
toggleBtn.addEventListener("click", (e) => {
  darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
