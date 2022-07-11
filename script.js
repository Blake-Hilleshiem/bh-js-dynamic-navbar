const hamburgerBtn = document.getElementById("hamburger-button");
const headerContainer = document.getElementById("header-container");
const headerLinks = document.getElementsByClassName("header-link");
const headerRight = document.getElementById("header-right");
const headerLeft = document.getElementById("header-left");
console.log(headerLinks);

// headerLinks[0].style.display = "none";
// console.log(headerLinks[0].style.display);

let onOrOff = true;

hamburgerBtn.addEventListener("click", () => {
  if (onOrOff == true) {
    hamburgerBtn.style = "text-align:right;";
    headerLeft.style = "width:30%;";
    headerContainer.style =
      "height:250px; align-items:flex-start; padding-top:30px;";
    headerContainer.style.transition = "1s";
    headerRight.style = "flex-direction:column; width: 70%;";

    for (let el of headerLinks) {
      el.style = "display:block; margin-top: 10px; font-size:2rem;";
    }
    onOrOff = false;
  } else if (onOrOff == false) {
    hamburgerBtn.style = "text-align:right;";
    headerLeft.style = "width:40%;";
    headerContainer.style =
      "height:80px; align-items:flex-start; padding-top:30px;";
    headerContainer.style.transition = "1s";
    headerRight.style = "flex-direction:column; width: 60%;";

    for (let el of headerLinks) {
      el.style = "display:none;";
    }
    onOrOff = true;
  }
});

// hamburgerBtn.style = "text-align:right;";
//     headerLeft.style = "width:30%;";
//     headerContainer.style =
//       "height:250px; align-items:flex-start; padding-top:30px;";
//     headerContainer.style.transition = "1s";
//     headerRight.style = "flex-direction:column; width: 70%;";

//     for (let el of headerLinks) {
//       el.style = "display:block; margin-top: 10px; font-size:2rem;";
//     }
