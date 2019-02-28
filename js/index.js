var sideNavItem = document.querySelectorAll('.side-nav__item');

function activeHandler(array) {
  for (var i = 0; i < array.length; i++) {
    array[i].addEventListener('click', function() {
      var current = document.getElementsByClassName('side-nav__item--active');
      if (current.length > 0) {
        current[0].className = current[0].className.replace(
          ' side-nav__item--active',
          ''
        );
      }
      this.className += ' side-nav__item--active';
    });
  }
}

activeHandler(sideNavItem);

var aboutLink = document.querySelector('.link-1');
var workLink = document.querySelector('.link-2');
var aboutSect = document.querySelector('.about-work__about');
var workSect = document.querySelector('.about-work__work');
var hamburger = document.querySelector('.side-bar__hamburger');
var ham = document.querySelector('.about-work__hamburger');
var hamTwo = document.querySelector('.hamburger-two');
var sideBar = document.querySelector('.side-bar');
var toggle = false;

aboutLink.addEventListener('click', function() {
  console.log(aboutSect.classList);
  aboutSect.classList.remove('about-work__about--active');
  workSect.classList.add('about-work__work--active');
  // setTimeout(moveTwo, 500);
  moveTwo();
  if (!toggle) {
    sideBar.classList.remove('side-bar--active');
    toggle = true;
  }
});

workLink.addEventListener('click', function() {
  aboutSect.classList.add('about-work__about--active');
  workSect.classList.remove('about-work__work--active');
  // setTimeout(moveOne, 500);
  moveOne();
  if (!toggle) {
    sideBar.classList.remove('side-bar--active');
    toggle = true;
  }
});

function moveOne() {
  workSect.style.display = 'block';
  aboutSect.style.display = 'none';
}

function moveTwo() {
  workSect.style.display = 'none';
  aboutSect.style.display = 'block';
}

hamburger.addEventListener('click', function() {
  if (!toggle) {
    sideBar.classList.remove('side-bar--active');
    toggle = true;
  }
});

ham.addEventListener('click', function() {
  if (toggle) {
    sideBar.classList.add('side-bar--active');
    toggle = false;
  }
});

hamTwo.addEventListener('click', function() {
  if (toggle) {
    sideBar.classList.add('side-bar--active');
    toggle = false;
  }
});
