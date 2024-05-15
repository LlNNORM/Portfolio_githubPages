 const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener ('click', () => {
    menu.classList.remove('active');
});

const percentages = document.querySelectorAll('.skills__bar-percentage'),
    lines = document.querySelectorAll('.skills__bar-line span');

percentages.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
})