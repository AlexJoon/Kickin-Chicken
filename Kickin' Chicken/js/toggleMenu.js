

// Simple JS script for toggling the navbar.

var menu = document.getElementById('menu');
var nav = document.getElementById('nav');

menu.addEventListener('click', function (e) {

    nav.classList.toggle('hide-nav');
    e.preventDefault();

});



