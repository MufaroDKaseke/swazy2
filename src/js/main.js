// Scroll behavior
$(document).ready(function() {
  // Initialize WOW.js
  new WOW().init();

  // Header scroll class
  $(window).scroll(function() {
    if ($(window).scrollTop() > 30) {
      $('#header').addClass('scrolled');
    } else {
      $('#header').removeClass('scrolled');
    }
  });

  // Smooth scrolling for nav links
  $('#header .nav-link').on('click', function(e) {
    if (this.hash !== '') {
      e.preventDefault();
      const hash = this.hash;
      
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 70 // Offset for fixed header
      }, 800);

      // Update active state
      $('#header .nav-link').removeClass('active');
      $(this).addClass('active');
    }
  });
});
