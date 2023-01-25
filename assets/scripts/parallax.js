let cover = document.querySelector(".relevant-bg");

window.addEventListener("scroll", function(){
    let value = window.scrollY;
    cover.style.marginTop = value * 0.3 + 'px';
})

  