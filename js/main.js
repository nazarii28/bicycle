const burger = document.getElementById('burger');
const menuBody = document.getElementById('menu-body');

burger.addEventListener('click', () => {
    menuBody.classList.toggle('active')
    burger.classList.toggle('active')
})

// slider

var mySwiper = new Swiper('.swiper-container', {
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  })