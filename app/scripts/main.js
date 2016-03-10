console.log('\'Allo \'Allo!');

var section = document.querySelector('.section');
console.log('section');
section.onclick = function() {
  console.log('this', this);
  if (this.dataset.section === 'info') {
    console.log('fuck yeah');
    console.log('nav', section.nextSilbing);
  } else {
    console.log('nope');
  }
}

$(document).ready(function() {
  $('.click').data('project', 'estce').on('click', function() {
      $('.estce').toggleClass('zoom');
  });
    $('.click-caraocruz').on('click', function() {
      $('.caraocruz').toggleClass('zoom');
  });
});