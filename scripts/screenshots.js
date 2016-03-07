(function() {
  $(document).ready(function() {
    $('.carousel-indicators li, .carousel-control').click(function() {
      if(!$(this).hasClass('active')) {
        $('.download-btn').toggleClass('hide');
      }
    });
  }); 
})();
