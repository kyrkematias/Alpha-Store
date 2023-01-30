var category = document.querySelector('.menu__category');
var menu = document.querySelector('.menu__deployable');
var plus = document.querySelector('.fa-plus');


function show(){
    setTimeout(function showCategory(){
        menu.classList.toggle('menu__deployableShows');
        plus.classList.toggle('fa-minus');
    }, 150)
}

var menuFilter = document.querySelector('.exp__menu');

function showMenu(){
    menuFilter.classList.toggle('filters__hidden');
}

function close(){
    menuFilter.classList.toggle('filters__hidden');
}


