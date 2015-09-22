(function($) {
  $.fn.lmask = function( action ) {
    var cls = 'lmask';
    
    $(this).toggleClass('lmask-relative', action === 'show');
    if (action === 'show') {
      if($(this).is('body') || $(this).is('html')){ cls += ' fixed' };
      $('<div>', {class: cls}).appendTo($(this));
    } else if (action === 'hide') {
      $(this).find('.'+cls).remove();
    }
  };
}(jQuery));