(function() {
  var animations, overlay, startAnimation;

  startAnimation = function(elements) {
    return function() {
      var element, i, len, results;
      results = [];
      for (i = 0, len = elements.length; i < len; i++) {
        element = elements[i];
        results.push(element.style.animationPlayState = 'running');
      }
      return results;
    };
  };

  animations = document.getElementsByClassName('animation');

  overlay = document.getElementsByClassName('overlay')[0];

  overlay.addEventListener('click', startAnimation(animations));

  overlay.addEventListener('touchstart', startAnimation(animations));

}).call(this);
