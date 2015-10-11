var main = function() {

/* Slide out menu. Push the body and the nav over by 285px over */

  $('.menu-link').click(function(){
    
    $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "285px"
    }, 200);

  });


  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
  });


/* Carrousel */

  $('.arrow-next').click(function() {
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();

    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();

    if(nextSlide.length === 0) {
      nextSlide = $('.slide').first();
      nextDot = $('.dot').first();
    }
    
    currentSlide.fadeOut(600).removeClass('active-slide');
    nextSlide.fadeIn(600).addClass('active-slide');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
    return false;
  });


  $('.arrow-prev').click(function() {
    var currentSlide = $('.active-slide');
    var prevSlide = currentSlide.prev();

    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();

    if(prevSlide.length === 0) {
      prevSlide = $('.slide').last();
      prevDot = $('.dot').last();
    }
    
    currentSlide.fadeOut(600).removeClass('active-slide');
    prevSlide.fadeIn(600).addClass('active-slide');

    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
    return false;
  });

// AUTOMATICALLY CHANGE SLIDES
var imagesTotal = 10;
var currentImage = 1;
var thumbsTotalWidth = 0;

function autoChangeSlides() {
  $('img.previewImage' + currentImage).hide();
  $('a.thumbnailsimage' + currentImage).removeClass("active");

  currentImage++;

  if (currentImage == imagesTotal + 1) {
    currentImage = 1;
  }

  $('a.thumbnailsimage' + currentImage).addClass("active");
  $('img.previewImage' + currentImage).show();
}

var slideTimer = setInterval(function() {autoChangeSlides(); }, 3000);

};


$(document).ready(main);
