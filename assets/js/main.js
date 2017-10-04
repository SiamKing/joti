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
      } else {
        $('.navbar-default').css({'background-color': 'transparent'});
        $(".nav-link").css({'color': 'white', 'background-color': 'transparent'});
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

  $(".nav-link").click(function(e) {
    var anchor = $(this).attr('href')
    $('html, body').scrollTo(this.hash, 1800)
    // remove classes from all
    $(".nav-link").removeClass("active");
    // add class to the one we clicked
    $(this).addClass("active");
  });
//
  $('.navbar-brand').click(function() {
    console.log('navbar-brand')
    $('html, body').scrollTo('home', {duration: 1800})
  })
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
