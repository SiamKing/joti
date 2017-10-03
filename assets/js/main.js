// PRELOADER
$(window).on('load', function(){
  $('.preloader').fadeOut(1000); // set duration in brackets
});

$(function() {
  var scroll_start = 0;
  var about = $('#about');
  var offset = about.offset();
  offset.top -= 10;;
  if (about.length){
    $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
        $(".navbar-default").css({'background-color': '#fff', 'opacity': '1'});
        $("nav a").css('color', 'black');
      } else {
        $('.navbar-default').css({'background-color': 'transparent'});
        $("nav a").css({'color': 'white', 'background-color': 'transparent'});
      }
    });
  }

  $(document).on("scroll", onScroll);

  $("ul.nav li").click(function() {
    var anchor = $(this).find('a').attr('href')

    $.scrollTo(anchor, 800)
    // remove classes from all
    $("nav ul li").removeClass("active");
    // add class to the one we clicked
    $(this).addClass("active");
  });

  $('.brand').click(function() {
    $.scrollTo('#top', 800)
  })
});

function onScroll(event){
  event.preventDefault();
    var scrollPos = $(document).scrollTop();
    $('nav ul li').each(function (e) {
        var currLink = $(this);
        var refElement = $(currLink.find('a').attr("href"));

        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() + 200 > scrollPos) {
            $('nav ul li').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
