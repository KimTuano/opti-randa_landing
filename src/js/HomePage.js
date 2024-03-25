const dropdowns = document.querySelectorAll('.dropdown')

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const selectlingua = dropdown.querySelector('.selectlingua');
    const options = dropdown.querySelectorAll('.selectlingua li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        selectlingua.classList.toggle('selectlingua-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            selectlingua.classList.remove('selectlingua-open');
            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});

/***************************************************************************** */

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.navigation a');
    const sections = document.querySelectorAll('section[id]');

    navLinks.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            scrollToSection(sections[index]);
        });
    });

    window.addEventListener('scroll', () => {
        const fromTop = window.scrollY;

        sections.forEach((section, index) => {
            if (section.offsetTop <= fromTop + 100) {
                navLinks.forEach((link) => link.classList.remove('active'));
                navLinks[index].classList.add('active');
            }
        });
    });

    function scrollToSection(section) {
        window.scroll({
            top: section.offsetTop - 80,
            behavior: 'smooth',
        });
    }
});


/************************************************************************* */

const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');

registerlink.addEventListener('click', () => {
    wrapper.classList.add('active');
})

loginlink.addEventListener('click', () => {
    wrapper.classList.remove('active');
})

/************************************************************************************** */

window.addEventListener('scroll', function() {
    const contacts = document.querySelectorAll('.contact-container');
    const scrollPosition = window.scrollY;

    contacts.forEach(function(contact, index) {
        if (scrollPosition > contact.offsetTop - window.innerHeight) {
            contact.classList.add('active');
        }
    });
});

/**************************************************************************************** */

function disableScroll() {
    // For modern browsers
    if (window.addEventListener) {
      window.addEventListener("DOMMouseScroll", preventDefault, false);
    }
    // For older IE browsers
    window.onmousewheel = document.onmousewheel = preventDefault;
    // For touch devices
    window.ontouchmove = preventDefault;
  }
  
  // Enable scrolling
  function enableScroll() {
    // For modern browsers
    if (window.removeEventListener) {
      window.removeEventListener("DOMMouseScroll", preventDefault, false);
    }
    // For older IE browsers
    window.onmousewheel = document.onmousewheel = null;
    // For touch devices
    window.ontouchmove = null;
  }
  
  // Prevent default scroll behavior
  function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault) e.preventDefault();
    e.returnValue = false;
  }
  
  // To disable scrolling
  disableScroll();

  /********************************************************************** */

  var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

