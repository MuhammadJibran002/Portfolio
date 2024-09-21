var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  console.log(n)
  var i;
  var slides = document.getElementsByClassName("mySlides");
  console.log(slides.length);
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    console.log('n is greater than slides ke length sai');
    slideIndex = 1
  }    
  if (n < 1) {
    console.log('n < 1');
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}