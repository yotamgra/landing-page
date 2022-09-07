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
      if (isInViewport(sections[i]) && stillSearching) {
        navTubs[i].className = "active-tub";
        stillSearching = false;
      } else {
        navTubs[i].classList.remove("active-tub");
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


// -----------------Global Variables and functions calls:------------------
// an arry of all the sections
const sections = document.querySelectorAll("section");

// contain the ul navbar
const navList = document.querySelector("#navbar__list");

buildNavbar();

// contain arry of all the li elements of the navbar-list
const navTubs = document.querySelectorAll(".menu__link");

updateAfterScroll();

hamburgerMenu()
