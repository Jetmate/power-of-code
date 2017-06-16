startAnimation = (elements) ->
  ->
    for element in elements
      element.style.animationPlayState = 'running'

animations = document.getElementsByClassName('animation')
overlay = document.getElementsByClassName('overlay')[0]
overlay.addEventListener 'click', startAnimation animations
overlay.addEventListener 'touchstart', startAnimation animations
