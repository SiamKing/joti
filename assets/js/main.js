// PRELOADER
// $(window).on('load', function(){
//   $('.preloader').fadeOut(1000); // set duration in brackets
// });

$(function() {
  var scroll_start = 0;
  var whatWeDo = $('#what-we-do');

  var offset = whatWeDo.offset();
  console.log(offset.top)
  offset.top -= 10;;
  if (whatWeDo.length){
    $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
        console.log(this)
        $(".navbar-default").css({'background-color': '#fff', 'opacity': '1'});
        $("nav a").css('color', 'black');
      } else {
        $('.navbar-default').css({'background-color': 'transparent'});
        $("nav a").css({'color': 'white', 'background-color': 'transparent'});
      }
    });
  }

  $(document).on("scroll", onScroll);

//   $(".navbar-nav a").click(function() {
//     var anchor = $(this).find('a').attr('href')
//
//     $.scrollTo(anchor, 800)
//     // remove classes from all
//     $("navbar-nav a").removeClass("active");
//     // add class to the one we clicked
//     $(this).addClass("active");
//     console.log(this)
//   });
//
  $('.navbar-brand').click(function() {
    $.scrollTo('#top', 800)
  })
});

function onScroll(event){
  event.preventDefault();
    var scrollPos = $(document).scrollTop();
    console.log(event)
    $('navbar div').each(function (e) {
        var currLink = $(this);
        var refElement = $(currLink.find('a').attr("href"));

        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() + 200 > scrollPos) {
            $('navbar div').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
