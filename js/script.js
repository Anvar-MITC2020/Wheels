$(function() {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 3,
    dots: false,
    margin: 10,
    loop: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 4000,
        responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
  });
});


$(document).ready(function() {
        $(".next").click(function() {
          $(".pagination")
            .find(".pageNumber.active")
            .next()
            .addClass("active");
          $(".pagination")
            .find(".pageNumber.active")
            .prev()
            .removeClass("active");
        });
        $(".prev").click(function() {
          $(".pagination")
            .find(".pageNumber.active")
            .prev()
            .addClass("active");
          $(".pagination")
            .find(".pageNumber.active")
            .next()
            .removeClass("active");
        });
      });

let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "mylists") {
    x.className += " responsive";
  } else {
    x.className = "mylists";
  }
}