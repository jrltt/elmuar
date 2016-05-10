'use strict';

console.log('\'Allo \'Allo!');

var elem = document.querySelector('.gallery');
/* global Flickity */
var flkty = new Flickity( elem, {
  cellAlign: 'left',
  cellSelector: '.cell',
  contain: true,
  lazyLoad: 1,
  pageDots: false,
  imagesLoaded: true,
  resize: true,
  percentPosition: false
});
console.log(flkty);

var $;
$(document).ready(function () {
  $('#menu-toggle').click(function (e) {
    e.preventDefault();
    $('.wrapper').toggleClass('toggled');
  });
  $('.overlay').click(function (e) {
    e.preventDefault();
    $('.wrapper').toggleClass('toggled');
  });
  $('.zoomTarget').zoomTo({
    root: $('.wrapper'),
    preservescroll: true
  });
});
