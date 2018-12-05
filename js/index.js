var sideNavItem = document.querySelectorAll('.side-nav__item');

function activeHandler(array) {
  for (var i = 0; i < array.length; i++) {
    array[i].addEventListener('click', function() {
      var current = document.getElementsByClassName('side-nav__item--active');

      // If there's no active class
      if (current.length > 0) {
        current[0].className = current[0].className.replace(
          ' side-nav__item--active',
          ''
        );
      }

      // Add the active class to the current/clicked button
      this.className += ' side-nav__item--active';
    });
  }
}

activeHandler(sideNavItem);
