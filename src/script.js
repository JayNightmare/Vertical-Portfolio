(function($) {
  var makeItRain = function() {
    $('.rain').empty();
    var increment = 0,
        drops = "",
        backDrops = "",
        randoHundo,
        randoFiver;
    
    while (increment < 100) {
      randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
      randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);
      increment += randoFiver;
      var dropStyle = 'left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;';
      drops += '<div class="drop" style="' + dropStyle + '"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
      backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
    }

    $('.rain.front-row').append(drops);
    $('.rain.back-row').append(backDrops);
  };

  $(document).ready(makeItRain);
})(jQuery); 


function scrollToJavaScript() {
  const goToElement = document.getElementById('bio'); // Replace with the actual ID of the target element
  const element = document.getElementById('javascript'); // Replace with the actual ID of the target element
  
  if (goToElement) {
      goToElement.scrollIntoView({ behavior: 'smooth' });
  }

  if (element) {
    element.classList.add('scroll-effect');

    setTimeout(() => {
      element.classList.remove('scroll-effect');
    }, 7000);
  }
}