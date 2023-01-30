var category = document.querySelector('.menu__category');
var menu = document.querySelector('.menu__deployable');
var plus = document.querySelector('.fa-plus');
var minus = document.querySelector('.fa-minus');


function show(){
    setTimeout(function showCategory(){
        menu.classList.toggle('menu__deployableShows');
        plus.classList.toggle('exp__menu');
        minus.classList.toggle('exp__menu');
    }, 0)
}

var menuFilter = document.querySelector('.exp__menu');

function showMenu(){
    menuFilter.classList.toggle('filters__hidden');
}

function close(){
    menuFilter.classList.toggle('filters__hidden');
}

var wrapper = document.querySelector('.wrapper');

function showWrapper(){
    wrapper.classList.toggle('exp__menu');
}

