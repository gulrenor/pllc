// Shows controls for HTML video player when hovered
$(document).ready(function() {
  $('video').hover(
    function() {
      $(this).prop('controls', !$(this).prop('controls'));
    }
  );
});
