// PRELOADER
// $(window).on('load', function(){
//   $('.preloader').fadeOut(1000); // set duration in brackets
// });

$(function() {
  // changing navbar from transparent to white when scrolling down past hero
  var scroll_start = 0;
  var whatWeDo = $('#what-we-do');

  var offset = whatWeDo.offset();

  offset.top -= 10;
  if (whatWeDo.length){
    $('html, body').scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
        $(".navbar-default").css({'background-color': '#fff', 'opacity': '1'});
        $(".nav-link").css('color', 'black');
        $(".navbar-brand").css('color', 'black');
      } else {
        $('.navbar-default').css({'background-color': 'transparent'});
        $(".nav-link").css({'color': 'rgb(172, 248, 255)', 'background-color': 'transparent'});
        $(".navbar-brand").css('color', 'white');
      }
    });
  }

  // smooth scrolling and add active class to clicked link
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // remove active class from nav links
      $('.nav-link').removeClass('active')
      // add active class to clicked link
      $(this).addClass('active')
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1600, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
});
