let navbar = document.querySelector('.header .navbar');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
};

document.querySelector('#info-btn').onclick = () => {
  contactInfo.classList.add('active');
}

document.querySelector('#close-contact-info').onclick = () => {
  contactInfo.classList.remove('active');
}

window.onscroll = () => {
  navbar.classList.remove('active');
  contactInfo.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
  loop: true,
  direction:'horizontal',
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction:false,
  }, 
      pagination: {
      el: ".swiper-pagination",
        dynamicBullets: true,
        on: {
          init: function () {
            document.querySelector('.swiper-wrapper').style.flexDirection = 'row-reverse';
          },
        },
      },
});
    

// var swiper = new Swiper(".pro-slider", {
//   loop: true,
//   direction:'horizontal',
//   grabCursor: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction:false,
//   },speed: 5,
//       navigation: {
//         nextE1: ".swiper-button-next",
//         prevE1: ".swiper-button-prev",
//         on: {
//           init: function () {
//             document.querySelector('.swiper-wrapper').style.flexDirection = 'row-reverse';
//           },
//         },
//       },
//     });
var swiper = new Swiper(".blogs-slider", {
  loop: true,
  grabcursor: true,
  spaceBetween: 20,
   autoplay: {
    delay: 2500,
    disableOnInteraction:false,
  }, speed: 5,
pagination: {
      el: ".swiper-pagination",
        dynamicBullets: true,
        on: {
          init: function () {
            document.querySelector('.swiper-wrapper').style.flexDirection = 'row-reverse';
          },
        },
      },
  breakpoints: {
    640: {
      slidesPerView:1,
    },
    768:{
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },

});