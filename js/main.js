let toUp = document.querySelector('.toUp');

window.addEventListener('scroll', function () {

if(window.scrollY > 170){
    toUp.style.display = 'block';
}
else{
    toUp.style.display = 'none';
}
localStorage.setItem('scrollY', window.scrollY);

if(window.scrollY >= 170 && window.scrollY < 635){
    toUp.style.color = '#fa8989';
}else if(window.scrollY >= 635 && window.scrollY < 2800){
    toUp.style.color = '#008aff';
}else{
    toUp.style.color = '#89f68a';
}
} );

toUp.addEventListener('click', function () {
    window.scrollTo(0, 0);
} );

window.onload = function () {
window.scrollTo(0, localStorage.getItem('scrollY'));
} ;