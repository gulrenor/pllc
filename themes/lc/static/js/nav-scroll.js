$(document).ready(function() {
  
  // Targets
  var nav = $('nav');
  var primaryButton = $('.hamburger a');
  var secondaryButton = $('nav ul li');
  var primaryMenu = $('nav > ul');

  function isMobileNav() {
    var breakpoint = window.getComputedStyle($('body')[0], ':before').getPropertyValue('content').replace(/\"/g, '');
    console.log('breakpoint' + breakpoint);
    return breakpoint;
  }

  // Mobile size open window
  primaryButton.click(function() {
    console.log(isMobileNav());
    if (isMobileNav()) {
      primaryMenu.toggle(this);
    }
  });
  
  
   // CHECK THIS FUNCTION, THE ONE ABOVE WORKS
   // AND THIS ONE SHOULD TOO IF ITS REWRITTEN THE SAME WAY
  // Secondary menu control
  secondaryButton.click(function(isMobileNav) {
    console.log('click ' + isMobileNav());
    if (isMobileNav()) {
      $('ul', this).toggle(this);
      secondaryButton.siblings('ul').css('color', 'red');  
    }
  });
  
  
  // Responsive breakpoint listener
  $(window).resize(function() {


      
  }).resize();

  // Floating/sticky nav bar
  /*
  $(window).scroll(function() {
    if ($(document).scrollTop() > 139) {
      nav.addClass('float');
    } else {
      nav.removeClass('float');
    };
  });
  */
  
  
});
