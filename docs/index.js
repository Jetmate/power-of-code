(function() {
  var animations, element, end_animations, i, len, overlay, startAnimation;

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

  end_animations = document.getElementsByClassName('animation-end');

  for (i = 0, len = end_animations.length; i < len; i++) {
    element = end_animations[i];
    element.addEventListener('animationend', function() {
      if (element.parentElement != null) {
        return element.parentElement.removeChild(element);
      }
    });
  }

}).call(this);
