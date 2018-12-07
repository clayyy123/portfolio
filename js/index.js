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

var aboutLink = document.querySelector('.link-1');
var workLink = document.querySelector('.link-2');
var aboutSect = document.querySelector('.about-work__about');
var workSect = document.querySelector('.about-work__work');

aboutLink.addEventListener('click', function() {
  console.log(aboutSect.classList);
  aboutSect.classList.remove('about-work__about--active');
  workSect.classList.add('about-work__work--active');
  setTimeout(moveTwo, 1500);
});

workLink.addEventListener('click', function() {
  aboutSect.classList.add('about-work__about--active');
  workSect.classList.remove('about-work__work--active');
  setTimeout(moveOne, 1500);
});

function moveOne() {
  setTimeout(function() {
    console.log('last');
    workSect.style.display = 'block';
    aboutSect.style.display = 'none';
    elem.style.width = 0 + '%';
  }, 1500);
}

function moveTwo() {
  setTimeout(function() {
    console.log('last');
    workSect.style.display = 'none';
    aboutSect.style.display = 'block';
    elem.style.width = 0 + '%';
  }, 1500);
}
