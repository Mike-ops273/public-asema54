//NAVIGATION MENU
const menuButton = document.querySelector('.menu-button');
let menuOpen = false; 
menuButton.addEventListener('click', () => {
    if(!menuOpen) {
        menuButton.classList.add('open');
        menuOpen = true;
    } else {
        menuButton.classList.remove('open'); 
        menuOpen = false; 
    }
})

//AUTOMATIC SLIDESHOW
var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3500); // Change image every 3.5 seconds
} 


