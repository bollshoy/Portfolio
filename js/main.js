AOS.init({
    once: true,
    mirror: false,
  }); 

  document.addEventListener('DOMContentLoaded', function () {
    const burgerIcon = document.querySelector('.burger-icon');
    const menu = document.querySelector('.menu');

    burgerIcon.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
});
