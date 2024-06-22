let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-contioner");

let formBtn = document.querySelector("#login-btn");
let loginForm = document.querySelector(".login-form-contioner");
let formClose = document.querySelector("#form-close");
let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
let imgBtn = document.querySelectorAll(".img-btn");

window.onscroll = () => {
  searchBtn.classList.remove("fa-times");
  searchBar.classList.remove("active");
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
};

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

searchBtn.addEventListener("click", () => {
  searchBtn.classList.toggle("fa-times");
  searchBar.classList.toggle("active");
});
formBtn.addEventListener("click", () => {
  loginForm.classList.add("active");
});
formClose.addEventListener("click", () => {
  loginForm.classList.remove("active");
});
imgBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".controls .active").classList.remove("active");
    btn.classList.add("active");
    let sr = btn.getAttribute("data-src");
    document.querySelector("#img-slider").src = sr;
  });
});

var swiper = new Swiper(".review-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".service-slider", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    450: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});
