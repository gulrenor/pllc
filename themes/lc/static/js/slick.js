// slick.js
// General configuration and initiation of the 'slick' image carousel.

$(document).ready(function() {
  $('.single-item').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  });
})
