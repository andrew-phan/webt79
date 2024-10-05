var swiper01 = new Swiper(".mySwiper", {
  loop : true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".mv .swiper-button-next",
    prevEl: ".mv .swiper-button-prev",
  },
});

// Khởi động Swiper
var swiper02 = new Swiper('.swiper-container', {
  slidesPerView: 3, 
  spaceBetween: 20,
  slidesPerGroup: 3, 
  navigation: {
      nextEl: '.home .swiper-button-next',
      prevEl: '.home .swiper-button-prev',
  },
  loop: false,   
  breakpoints: {  
    '1024': {
      slidesPerView: 7,
      spaceBetween: 30,
      slidesPerGroup: 7,
    },
    '768': {
      slidesPerView: 5,
      slidesPerGroup: 5,
    },
  },
});