$(window).scroll(function() {
  if ($(window).scrollTop() > 30) {
    $('#header').addClass('scrolled');
  } else {
    $('#header').removeClass('scrolled');
  }
});
