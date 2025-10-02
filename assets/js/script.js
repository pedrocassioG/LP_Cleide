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

  // --- CÓDIGO DO FAQ (ACORDEÃO) ---
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      
      // Fecha todos os outros que estiverem abertos
      faqQuestions.forEach(otherButton => {
        if (otherButton !== button && otherButton.classList.contains('active')) {
          otherButton.classList.remove('active');
          otherButton.nextElementSibling.style.maxHeight = null;
        }
      });
      
      // Abre ou fecha o item clicado
      button.classList.toggle('active');
      if (button.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
        answer.style.maxHeight = null;
      }
    });
  });

