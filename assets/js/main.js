const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav__menu--open");
    changeToggleIcon();
});

navLinks.forEach(link => {
    link.addEventListener("click", ()=>{
        navMenu.classList.toggle("nav__menu--open");
        changeToggleIcon();
    });
});

function changeToggleIcon() {
    if (navMenu.classList.contains("nav__menu--open")) {
        navToggle.classList.replace("ri-menu-4-line", "ri-close-line");
    } else {
        navToggle.classList.replace("ri-close-line", "ri-menu-4-line");
    }
}

// ativar nav link scrool 
function addActiveLink() {
    const section = document.querySelectorAll("section[id]");
    section.forEach((section) => {
        const scrollY = window.scrollY,
          sectionTop = section.offsetTop - 80,
          sectionHeight = section.offsetHeight,
          sectionId = section.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector(".nav__link[href*=" + sectionId + "]")
            .classList.add("nav__link--active");
        } else {
          document
            .querySelector(".nav__link[href*=" + sectionId + "]")
            .classList.remove("nav__link--active");
        }
    });
}

window.addEventListener("scroll", addActiveLink)

// Counter 
function startCounter(Counter) {
    const targetNumber = Counter.getAttribute("data-target");
    const increment = setInterval(() => {
        Counter.textContent++;

        if (Counter.textContent == targetNumber) {
            clearInterval(increment);
        }
    }, 2000 / targetNumber);
}

const counterSection = document.querySelector(".counter");
const counters = document.querySelectorAll(".counter__number")
let started = false;

window.addEventListener("scroll", () => {
    if (window.scrollY >= counterSection.offsetTop - 400) {
        if(!started) {
            counters.forEach((counter) => startCounter(counter));
        }

        started = true;
    }
})

//ScrollTop 

const scrolltop = document.getElementById("scrollTop")

window.addEventListener("scroll", () => {
    if (this.scrollY >= 300) {
        scrolltop.classList.add("scrolltop--show")
    } else {
        scrolltop.classList.remove("scrolltop--show")
    }
})