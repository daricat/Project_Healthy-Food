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
  $('.multiple-items2').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: true,
  dotsClass: 'sale-products__nav',
  });
});  
	
  
$(function initSlider(){
  $('.autoplay').slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: false,
  autoplay: false,
  autoplaySpeed: 2000,
  dots: true,
  
  
  });
});

$(function initSlider(){
  $('.autoplay2').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  autoplay: false,
  autoplaySpeed: 2000,
  dots: true,
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

$(function initSlider(){
  $('.review1').slick({     
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1500,
    prevArrow: '.second-line__arrow-left1',
    nextArrow: '.second-line__arrow-right1',
  });
});

$(function initSlider(){
  $('.review2').slick({     
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1500,
    prevArrow: '.second-line__arrow-left2',
    nextArrow: '.second-line__arrow-right2',
  });
});

$(function initSlider(){
  $('.review3').slick({     
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1500,
    prevArrow: '.second-line__arrow-left3',
    nextArrow: '.second-line__arrow-right3',
  });
});

// Timer

var countDownDate = new Date("Jan 5, 2020 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("min").innerHTML = minutes;
  document.getElementById("sec").innerHTML = seconds;
    

}, 1000);


//filter

$(function() {

  let filter = $("[data-filter]");

  filter.on("click", function(event) {
      event.preventDefault();

      let item = $(this).data('filter');

      if(item == 'all') {
          $("[data-item]").removeClass("hide");
      } else {
          $("[data-item]").each(function() {
              let workItem = $(this).data('item');

              if(workItem != item) {
                  $(this).addClass('hide');
              } else {
                  $(this).removeClass('hide');
              }
          });
      }
  });
});




