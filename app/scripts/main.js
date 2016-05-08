'use strict';

console.log('\'Allo \'Allo!');

var $;
$(document).ready(function () {
  $('#menu-toggle').click(function (e) {
    e.preventDefault();
    $('.wrapper').toggleClass('toggled');
  });
});
