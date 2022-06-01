// selected items 
const navbar = document.querySelector('.navbar');
const section_1 = document.querySelector('.section-1');
const box = document.querySelector('.known');
const overlay = document.querySelectorAll('.over');
const nav_links = document.querySelectorAll('.nav-links');
const sections = document.querySelectorAll('.section');
// end of selected items 

// navigation bar observer 
const navOptions = {
  threshold: 0,
  rootMargin: "0% 0% 100% 0%"
};

const nav_observer = new IntersectionObserver(function (entries, nav_observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      navbar.classList.add('fixed');
    }
    else {
      navbar.classList.remove('fixed');
    }
  });
}, navOptions);

nav_observer.observe(section_1);
// end of navigation bar observer

// juice observer 
const juiceOption = {
  threshold: 0,
  rootMargin: "0px 0px -5px 0px"
};

const juiceObserver = new IntersectionObserver(function (entries, juiceObserver) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    }
    else {
      overlay[0].classList.add('htmlper');
      overlay[1].classList.add('dsaper');
      overlay[2].classList.add('cssper');
      overlay[3].classList.add('jsper');
      overlay[4].classList.add('sassper');
      overlay[5].classList.add('nodeper');
      overlay[6].classList.add('cper');
      overlay[7].classList.add('oopper');
      overlay[8].classList.add('osper');
      juiceObserver.unobserve(entry.target);
    }
  });
}, juiceOption);

juiceObserver.observe(box);
// end of juice observer

// navlink change on section
window.addEventListener('scroll', function () {
  sections.forEach((section, i) => {
    if (window.pageYOffset >= section.offsetTop - 10) {
      nav_links.forEach(el => {
        el.classList.remove('underline');
      });
      nav_links[i].classList.add('underline');
    }
  });
});
// end of navlink change on section