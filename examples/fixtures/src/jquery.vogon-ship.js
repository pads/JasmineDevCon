(function($) {
  $.fn.destroyPlanet = function() {
    this.find('.planet').remove();
    this.change();
  };
})(jQuery);