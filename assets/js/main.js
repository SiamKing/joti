// PRELOADER
// $(window).on('load', function(){
//   $('.preloader').fadeOut(1000); // set duration in brackets
// });

$(function() {
  // changing navbar from transparent to white when scrolling down past hero
  var scroll_start = 0;
  var whatWeDo = $('#what-we-do');

  var offset = whatWeDo.offset();
  offset.top -= 100;
  if (whatWeDo.length){
    $(window).scroll(function(e) {
      scroll_start = $(this).scrollTop();
      // Check to see if position of current scroll is greater than the position of #what-we-do
      if(scroll_start > offset.top) {
        $(".navbar-default").css({'background-color': '#fff', 'opacity': '1'});
        $(".navbar-default").addClass('nav-after-scroll');
        $(".nav-link").css('color', 'black');
        $(".navbar-brand").css('color', 'rgb(172, 248, 255)');
      } else {
        $('.navbar-default').css({'background-color': 'transparent'});
        $(".navbar-default").removeClass('nav-after-scroll');
        $(".nav-link").css({'color': 'rgb(172, 248, 255)', 'background-color': 'transparent'});
        $(".navbar-brand").css('color', 'white');

      }
    });
  }

  $('a[href^="#"]').on('click', function(event) {
    let target = $(this.hash);
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
          scrollTop: target.offset().top - 80
      }, 1000);
    }
  });

});
