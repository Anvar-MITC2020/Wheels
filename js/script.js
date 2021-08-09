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