const hamburgerBtn = document.getElementById("hamburger-button");
const headerContainer = document.getElementById("header-container");
const headerLinks = document.getElementsByClassName("header-link");
const headerRight = document.getElementById("header-right");
const headerLeft = document.getElementById("header-left");
const openHeaderLinks = document.getElementsByClassName("header-link-open");

let onOrOff = true;

hamburgerBtn.addEventListener("click", () => {
  if (onOrOff == true) {
    headerContainer.className = "header-container-open";
    headerLeft.className = "header-left-open";
    headerRight.className = "header-right-open";
    hamburgerBtn.className = "hamburger-button-open";

    for (let i of ["", "", "", ""]) {
      for (let el of headerLinks) {
        el.className = "header-link-open";
      }
    }

    onOrOff = false;
  } else if (onOrOff == false) {
    headerContainer.className = "header-container";
    headerLeft.className = "header-left";
    headerRight.className = "header-right";
    hamburgerBtn.className = "hamburger-button";

    for (let i of ["", "", "", ""]) {
      for (let el of openHeaderLinks) {
        el.className = "header-link";
      }
    }
    onOrOff = true;
  }
});
