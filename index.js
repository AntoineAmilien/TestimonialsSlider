  var slideIndex = 1;
  var textIndex = 1;

  showSlides(slideIndex);
  showText(textIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
    showText(textIndex += n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
  }

  function showText(n) {
    var text = document.getElementsByClassName("container-texte");

    if (n > text.length) {
      textIndex = 1;
    }

    if (n < 1) {
      textIndex = text.length
    }

    for (i = 0; i < text.length; i++) {
      text[i].style.display = "none";
    }

    var width = window.screen.width;

    text[textIndex - 1].style.display = "block";
  }
