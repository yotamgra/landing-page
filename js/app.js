// Functions:

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
        top: locationSection.top,
        behavior: "smooth",
      });
    });
    navList.appendChild(navTub);
  });
}

// functions which get as argument an element and return if it is in the viewport
// source: https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

// functions which check after every scroll which section on the viewport and highlight its nav-tub
function updateAfterScroll() {
  window.addEventListener("scroll", function () {
    let stillSearching = true;
    for (let i = 0; i < sections.length; i++) {
      if (isInViewport(sections[i]) && stillSearching) {
        navTubs[i].className = "active-tub";
        stillSearching = false
      } else {
        navTubs[i].classList.remove("active-tub");
        navTubs[i].classList.add("menu__link");
      }
    }
  });
}

/**
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/*
             Global Variables
            */

// an arry of all the sections
const sections = document.querySelectorAll("section");

// contain the ul navbar
const navList = document.querySelector("#navbar__list");

buildNavbar();

// contain arry of all the li elements of the navbar-list
const navTubs = document.querySelectorAll(".menu__link");

updateAfterScroll();

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
