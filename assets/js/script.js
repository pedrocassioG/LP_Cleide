// Espera o evento que diz que todo o HTML foi carregado e está pronto
document.addEventListener('DOMContentLoaded', function () {

  // Todo o nosso código JavaScript vai aqui dentro
  
  const swiper = new Swiper('.swiper', {
    // Parâmetros opcionais
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,

    // --- ADICIONE ESTE BLOCO PARA O AUTOPLAY ---
    autoplay: {
      delay: 4000, // Tempo em milissegundos (4000ms = 4 segundos)
      disableOnInteraction: false, // Continua o autoplay mesmo depois do usuário interagir
    },
    // -----------------------------------------

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