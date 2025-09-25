// Espera o evento que diz que todo o HTML foi carregado e está pronto
document.addEventListener('DOMContentLoaded', function () {

  // Todo o nosso código JavaScript vai aqui dentro
  
  const swiper = new Swiper('.swiper', {
    // Parâmetros opcionais
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // Breakpoints para responsividade
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      }
    }
  });

});