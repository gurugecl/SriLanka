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

    $('#links').localScroll({
           target:'body'
        });

};

 $(document).ready(main);

 
