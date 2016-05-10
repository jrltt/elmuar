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


  $(function() {
    $('a[href*="#"]:not([href="#"]).link').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

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
    root: $('#page-content-wrapper'),
  });
});
