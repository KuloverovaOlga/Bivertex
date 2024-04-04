import Swiper from 'swiper';

import '../components/areas';

window.addEventListener('DOMContentLoaded', () => {
  Swipers();

  newsDropdown();
  promotionsAcc();
  promotionBtns();
});

const newsDropdown = () => {
  if (document.querySelector('.news__dropdown')) {
    const dropdown = document.querySelector('.news__dropdown'),
      selectedItem = dropdown.querySelector('.news__dropdown-selected');

    const initialHeight = dropdown.clientHeight;

    dropdown.addEventListener('click', (e) => {
      let target = e.target;

      if (target.classList.contains('news__dropdown-head')) {
        dropdown.classList.toggle('active');

        dropdown.classList.contains('active')
          ? (dropdown.style.maxHeight = `${dropdown.scrollHeight}px`)
          : (dropdown.style.maxHeight = `${initialHeight}px`);

        return;
      }

      if (target.classList.contains('news__dropdown-item')) {
        selectedItem.textContent = target.textContent;

        dropdown.classList.remove('active');
        dropdown.style.maxHeight = `${initialHeight}px`;
      }
    });
  }
};

const promotionsAcc = () => {
  if (document.querySelector('.promotions__block-acc')) {
    const accordion = document.querySelector('.promotions__block-acc'),
      accordionItems = accordion.querySelectorAll('.promotions__block-acc--point'),
      accordionImages = accordion.querySelectorAll('.promotions__block-acc--img'),
      initHeight = accordionItems[0].clientHeight;

    let activeIndex = 0;

    accordionItems.forEach((item) => {
      item.classList.contains('active') && (item.style.maxHeight = `${item.scrollHeight + 60}px`);
    });

    accordion.addEventListener('click', (e) => {
      let target = e.target;

      if (target.classList.contains('promotions__block-acc--head')) {
        let targetParent = target.closest('.promotions__block-acc--point');

        accordionItems.forEach((item) => {
          item.classList.remove('active');
          item.style.maxHeight = `${initHeight}px`;
        });

        targetParent.classList.add('active');
        targetParent.style.maxHeight = `${targetParent.scrollHeight + 40}px`;

        accordionItems.forEach((item, i) => item.classList.contains('active') && (activeIndex = i));

        accordionImages.forEach((img) => img.classList.remove('active'));

        accordionImages[activeIndex].classList.add('active');
      }
    });
  }
};

const promotionBtns = () => {
  if (document.querySelector('.promotions')) {
    const btns = document.querySelectorAll('.promotions__block-right--button');

    btns.forEach((btn) => {
      btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        if (btn.classList.contains('active')) {
          btn.textContent = 'Опция включена'

        } else {
          btn.textContent = 'Включить опцию'
        }
      });
    });

   const btnsSvg = document.querySelectorAll('.promotions__block-right--button-service')
   btnsSvg.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
    });
  });
  }
};

const Swipers = () => {
  if (window.screen.width <= 768) {
    const promotionMobileSwiper = new Swiper('.promotions__block-swiper', {
      slidesPerView: 1.1,
      slidesPerGroup: 1,
      spaceBetween: 8
    });
  }
};
