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

  $(document).on("scroll", onScroll);

  // $('a[href^="#"]').on('click', function(event) {
  //   let target = $(this.hash);
  //   if (target.length) {
  //
  //     event.preventDefault();
  //
  //     $('html, body').stop().animate({
  //         scrollTop: target.offset().top - 80
  //     }, 1000);
  //     $(".navbar-nav a").removeClass("active");
  //     $(".navbar a").removeClass("active");
  //     $(this).addClass("active");
  //   }
  // });

  // smooth scroll when clicking navbar links and changes active class
  $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 80
        }, 800, 'swing', function () {
            window.location.hash = target - 200;
            $(document).on("scroll", onScroll);
        });
    });
});

// Changes current target's class to active on scroll
function onScroll(event){
  event.preventDefault();
    var scrollPos = $(document).scrollTop();
    $('.navbar-nav a').each(function (e) {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top - 200 <= scrollPos && refElement.position().top + refElement.height() + 200 >= scrollPos) {
            $('.navbar-nav a').removeClass('active');
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
