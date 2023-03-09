const brandsSwiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
          768: {
            enabled: false,
            width: 224,
            spaceBetween: 24,
          },
          1120: {
            enabled: false,
            width: 240,
            spaceBetween: 32,
          },
  }});

const brands = document.querySelector('.brands');
const swipeWrapper = brands.querySelector('.swiper-wrapper');
const brandsBtn = brands.querySelector('.brands__show-more-button');
const brandsSee = brandsBtn.querySelector('.text');
const brandsArrow = brandsBtn.querySelector('.brands__arrow');
const slidHidden = document.querySelectorAll('.swiper-slide--hidden');

  brandsBtn.addEventListener('click', function() {
    slidHidden. forEach(element => 
      element.classList.toggle('swiper-slide--hidden')
      );
      if (brandsSee.textContent === 'Показать все') {
      brandsSee.textContent = 'Скрыть';
      brandsArrow.src = 'assets/icons/arrow_up.svg';
      swipeWrapper.classList.add('swiper-indent');
      brands.classList.add('brands-indent');
    } else {
      brandsSee.textContent = 'Показать все';
      brandsArrow.src = 'assets/icons/arrow_down.svg';
      swipeWrapper.classList.remove('swiper-indent');
      brands.classList.remove('brands-indent');
    }
    }
  );