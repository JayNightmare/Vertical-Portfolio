var slideIndex = 1;

document.addEventListener("DOMContentLoaded", function() {
  showSlides(slideIndex);

  // Add timer for automatic change
  var slideInterval = setInterval(function() {
    plusSlides(1);
  }, 4000); // Change image every 4 seconds
});

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (slides.length === 0) return; // Prevent errors if there are no slides
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}
