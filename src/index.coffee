startAnimation = (elements) ->
  ->
    for element in elements
      element.style.animationPlayState = 'running'

animations = document.getElementsByClassName('animation')
overlay = document.getElementsByClassName('overlay')[0]
overlay.addEventListener 'click', startAnimation animations
overlay.addEventListener 'touchstart', startAnimation animations
end_animations = document.getElementsByClassName('animation-end')
for element in end_animations
  element.addEventListener 'animationend', ->
    if element.parentElement?
      element.parentElement.removeChild element