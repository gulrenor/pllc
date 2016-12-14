// plvid.js
// Shows controls for HTML video player when hovered

$(document).ready(function() {
  // Which breakpoint is the mobile menu?
  var mobileNavBreakpoint = 'small';
  
  function isMobileNav() {
    // Check the html body::before which contains
    // the current breakpoint
    var breakpoint = window.getComputedStyle($('body')[0], ':before').getPropertyValue('content').replace(/\"/g, '');
    if (breakpoint === mobileNavBreakpoint) {
      return true;
    } else {
      return false;
    }
  }
  
  // FIXME: This should all probably be refactored...
  
  // Always show controls when mobile size
  // Check again when page is resized
  if (isMobileNav()) {
    $('video').prop('controls', true);  
  };
    
  $(window).resize(function() {
    if (isMobileNav()) {
      $('video').prop('controls', true);  
    } else {
      $('video').prop('controls', false);  
    };
  });

  $('video').hover(
    function() {
      $(this).prop('controls', true);
    },
    function() {
      if (!isMobileNav()) {
        $(this).prop('controls', false);  
      }
    }
  );
  
});
