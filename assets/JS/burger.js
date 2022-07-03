const burgerMenu = document.querySelector('.header_burger');
const bodyMenu = document.querySelector('.header_nav');
// const headerLogo = document.querySelector('.header_logo');
// const header = document.querySelector('.header');
// const shadow = document.querySelector('.shadow');
if (burgerMenu) {

    burgerMenu.addEventListener('click', function(e) {
        // document.body.classList.toggle('_lock');
        burgerMenu.classList.toggle('_active');
        bodyMenu.classList.toggle('_active');
        // headerLogo.classList.toggle('_active');
        // header.classList.toggle('_active');
        // shadow.classList.toggle('_active');
    });
    // shadow.addEventListener('click', function (e) {
    //   document.body.classList.remove('_lock');
    //   burgerMenu.classList.remove('_active');
    //   bodyMenu.classList.remove('_active');
    //   headerLogo.classList.remove('_active');
    //   header.classList.remove('_active');
    //   shadow.classList.remove('_active');
    // });
}