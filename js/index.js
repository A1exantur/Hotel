const menuBnt = document.querySelector('.menu_btn');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menu__list-button');

menuBnt.addEventListener('click', () => {
    menu.classList.toggle('menu--open')
});


menuClose.addEventListener('click', () => {
    menu.classList.remove('menu--open')
});


const modal = document.querySelector('.cart-modal_overlay');
const trigger = document.querySelector('.btn');
const closer = document.querySelector('.img_cart');

trigger.addEventListener('click', function() {
    modal.classList.add('open'); 
});

closer.addEventListener('click', function() {
    modal.classList.remove('open');
});

modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.classList.remove('open'); 
    }
});