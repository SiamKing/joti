// PRELOADER
// $(window).on('load', function(){
//   $('.preloader').fadeOut(1000); // set duration in brackets
// });

$(function() {
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

  // $('html, body').on("scroll", onScroll);

  // $('a[href^="#"]').click(function(e) {
  //   console.log(this.hash)
  //   let hash = this.hash;
  //   // Prevent the jump and the #hash from appearing on the address bar
  //   e.preventDefault();
  //   // Scroll the window, stop any previous animation, stop on user manual scroll
  //   // Check https://github.com/flesler/jquery.scrollTo for more customizability
  //   $('html, body').scrollTo(hash, {duration:1000});
  // });

  // $(".nav-link").click(function(e) {
  //   var anchor = $(this).attr('href');
  //   $('html, body').scrollTo(anchor, 1800)
  //   // remove classes from all
  //   $(".nav-link").removeClass("active");
  //   // add class to the one we clicked
  //   $(this).addClass("active");
  // });
//

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
      $('.nav-link').removeClass('active')
      console.log(target)
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
  // $('.navbar-brand').click(function() {
  //   console.log('navbar-brand')
  //   $('body').scrollTo('#home', {duration: 1800})
  // })
});

function onScroll(event){
  event.preventDefault();
    var scrollPos = $(document).scrollTop();
    $('.nav-link').each(function (e) {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));

        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() + 200 > scrollPos) {
            $('nav-link').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
