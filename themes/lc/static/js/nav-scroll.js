$(document).ready(function() {
  
  // Which breakpoint is the mobile menu?
  var mobileNavBreakpoint = 'mobile';

  // Targets
  var nav = $('.nav-main');
  var primaryButton = $('.hamburger-button');
  var secondaryButton = $('.nav-main ul li');
  var primaryMenu = $('.nav-main > ul');
  var secondaryMenu = $('.nav-main > ul ul');
  
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

  // Mobile size open window
  primaryButton.click(function() {
    if (isMobileNav()) {
      primaryMenu.toggle(function() {
        if ($(this).is(':visible'))
          $(this).css('display', 'flex');
      });
    }
  });
  
    // Secondary menu control
  secondaryButton.click(function() {
    if (isMobileNav()) {
      secondaryMenu.css('display', 'none');
      $('ul', this).toggle(function() {
        if ($(this).is(':visible'))
          $(this).css('display', 'flex');
      });
    }
  });
  
  // Responsive breakpoint listener
  $(window).resize(function() {
    if (!isMobileNav()) {
      // Reset menus to initial states in case the
      // window is resized to desktop when they're open
      primaryMenu.css('display', 'flex');
      if (secondaryMenu.is(':visible'))
        secondaryMenu.css('display', 'none');
      /*
      // HACK: This is a bit overkill.
      location.reload();
      */
    }
    if (isMobileNav()) {
      if (primaryMenu.is(':visible'))
        primaryMenu.css('display', 'none');
    }
  });

  // Floating/sticky nav bar
  $(window).scroll(function() {
    if ($(document).scrollTop() > 139) {
      nav.addClass('float');
    } else {
      nav.removeClass('float');
    };
  });

});
