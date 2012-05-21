(function($) {
  $.fn.generatePlanet = function(name) {
    this.text(name);
    this.addClass('planet');
  };
})(jQuery);