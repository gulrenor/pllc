// slick-width.js
// Handles the width of the slick slider's 'title bar'

$(document).ready(function() {
  
  var mobileNavBreakpoint = 'mobile';
  
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

  // Check the current width of the element
  function findWidth(el) {
    return Math.round($(el).width()) + 'px';
  }
  
  // Set width on appropriate elements
  function setLimit(child, container) {
    $(child).css('width', findWidth(container));
  }
  
  // Check if mobile size and apply css
  function checkBreakpoint() {
    if (isMobileNav()) {
      setLimit('.slider-title', '.slider');
    } else {
      $('.slider-title').removeAttr('style');
    }
  }
  
  // Recheck/reset on window resize
  $(window).on('resize', function() {
    checkBreakpoint();
  });
  
  // Check on load
  checkBreakpoint();
  
});
