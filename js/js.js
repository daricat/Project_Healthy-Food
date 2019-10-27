var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 10000); // Change image every 2 seconds
  
}

  
$(function initSlider(){
  $('.autoplay').slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  dotsClass: 'sale-products__nav',
  });
});

$(function initSlider(){
  $('.review').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 1500,
    prevArrow: '.second-line__arrow-left',
    nextArrow: '.second-line__arrow-right',
  });
});

$(function initSlider(){
  $('.s123').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
    
  });
});








