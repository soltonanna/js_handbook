(function ($) {
  $(document).ready(() => {
    // Load sections dynamically
    $('#cover-container').load('sections/section-cover.html');
    $('#event-loop-container').load('sections/section-event-loop.html');
    $('#arrays-container').load('sections/section-arrays.html');
    $('#functions-container').load('sections/section-functions.html');
    $('#objects-container').load('sections/section-objects.html');

    // Toggle Side Menu
    $('#menu-icon').click(() => {
      $('#side-menu').css('left', $('#side-menu').css('left') === '0px' ? '-220px' : '0px');
    });

    // Smooth Scroll
    $('.menu-item').click(function (e) {
      e.preventDefault();
      const target = $(this).attr('href');
      $('html, body').animate(
        { scrollTop: $(target).offset().top },
        800,
      );

      // Highlight the active menu item
      $('.menu-item').removeClass('active');
      $(this).addClass('active');
    });

    // Highlight Active Menu Item on Scroll
    $(window).scroll(() => {
      const scrollPos = $(window).scrollTop();
      $('.section').each(function () {
        const sectionTop = $(this).offset().top - 50;
        const sectionId = $(this).attr('id');

        if (scrollPos >= sectionTop) {
          $('.menu-item').removeClass('active');
          $(`a[href="#${sectionId}"]`).addClass('active');
        }
      });
    });
  });
}(window.jQuery));
