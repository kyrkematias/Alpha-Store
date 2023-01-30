var category = document.querySelector('.menu__category');
var menu = document.querySelector('.menu__deployable');
var plus = document.querySelector('.fa-plus');


function show(){
    setTimeout(function showCategory(){
        menu.classList.toggle('menu__deployableShows');
        plus.classList.replace('fa-plus', 'fa-minus');
    }, 150)
}



