// ----------------------Functions:--------------------------
// function which create the navbar
function buildNavbar() {
  sections.forEach((section) => {
    // creating li element for each section
    const navTub = document.createElement("li");
    navTub.className = "menu__link";
    // each nav-tub get the contant from the dateset of the section
    navTub.textContent = section.dataset.nav;
    // adding event listener for each nav-tub
    navTub.addEventListener("click", function () {
      const locationSection = section.getBoundingClientRect();
      //  when clicking the nav-tub, it's scrolling smoothly to the section
      scrollBy({
        top: locationSection.top - 50,
        behavior: "smooth",
      });
      if (window.innerWidth < 600) {
        navList.classList.add("hidden");
      }
    });
    navList.appendChild(navTub);
  });
}

// functions which check after every scroll which section on the viewport and highlight its nav-tub
function updateAfterScroll() {
  window.addEventListener("scroll", function () {
    let stillSearching = true;
    for (let i = 0; i < sections.length; i++) {
      
      console.log(headerSections[i]);
      if (isInViewport(sections[i]) && stillSearching) {
        headerSections[i].classList.add("active-section");
        navTubs[i].className = "active-tub";
        stillSearching = false;
      } else {
        navTubs[i].classList.remove("active-tub");
        headerSections[i].classList.remove("active-section")
        navTubs[i].classList.add("menu__link");
      }
    }
  });
}

// functions which get as argument an element and return if it is in the viewport
// source: https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  // 100 because the height of the navbar
  return rect.top <= window.innerHeight && rect.bottom >= 100;
}

// function which activate the hamburger-menu for mobile
/* source: https://www.w3schools.com/howto/howto_js_mobile_navbar.asp */
function hamburgerMenu() {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  hamburgerMenu.addEventListener("click", function () {
    if (!navList.classList.contains("hidden")) {
      navList.classList.add("hidden");
      navList.classList.remove("nav-display");
    } else {
      navList.classList.remove("hidden");
      navList.classList.add("nav-display");
    }
  });
}

function subscribe() {
  const formEl = document.querySelector("form");
  console.log(formEl);
  formEl.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("event");
    console.log();
    const inputDataArry = document.querySelectorAll("input");
    console.log(inputDataArry);
    const userObjData = {};
    inputDataArry.forEach((input) => {
    userObjData[input.name] = input.value;
    });
    dataBase.push(userObjData);
    alert(`Thank you ${userObjData.name} !`);
  });
}

// -----------------Global Variables and functions calls:------------------
// an arry of all the sections
const sections = document.querySelectorAll("section");

// an arry of all the headers 0f the sections
const headerSections = this.document.querySelectorAll('.header-section');

// contain the ul navbar
const navList = document.querySelector("#navbar__list");

buildNavbar();

// contain arry of all the li elements of the navbar-list
const navTubs = document.querySelectorAll(".menu__link");

// arry which contains objects, and each object contains user's form input
const dataBase = [];

updateAfterScroll();

hamburgerMenu();

subscribe();
