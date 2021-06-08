var pausePrevious = document.querySelector('.prev'); 
var pauseNext = document.querySelector('.next');



//AUTOMATIC SLIDESHOW
var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  /*if (plusSlides) {
    setTimeout = false;
  }*/
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3500); // Change image every 3.5 seconds
} 

//SLIDE CONTROLS 
// Next/previous controls
function plusSlides(n) {
 changeSlide(slideIndex += n);
 setTimeout = false;
}
// Thumbnail image controls
function currentSlide(n) {
 changeSlide(slideIndex = n);
}
function changeSlide(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

//NAV MENU
/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
