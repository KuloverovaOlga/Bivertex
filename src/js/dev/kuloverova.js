import popup from '../utils/popup';
import form from '../utils/form';
import 'inputmask';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export const modules = {};
window.$ = window.jQuery = require('jquery');
import { rem } from '../utils/constants';

document.addEventListener('DOMContentLoaded', () => {
  try {
    popup();
  } catch {}
  try {
    form();
  } catch {}
  try {
    phoneMask();
  } catch {}
  try {
    dropdownHeader();
  } catch {}
  try {
    mainHeroSwiper();
  } catch {}
});

function phoneMask() {
  const mask = new Inputmask('+7 (999) 999 99 99');
  mask.mask($('.phone-mask'));
}

function dropdownHeader() {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach((dropdown) => {
    const dropdownContent = dropdown.querySelector('.header__dropdown');
    const dropdownLink = dropdown.querySelector('.header__nav-item-link-wrapper');
    const dropdownInner = dropdown.querySelector('.header__dropdown-inner');
    const dropdownServisesContent = dropdown.querySelector('.header__dropdown-services');
    const listTitle = dropdown.querySelectorAll('.list-title');

    setTimeout(() => {
      dropdownContent.style.transition = 'opacity 0.3s, visibility 0.3s, z-index 0.3s';
    }, 0);

    function mouseenter() {
      dropdownContent.classList.add('active');
      dropdownLink.classList.add('active');
      dropdownInner.addEventListener('mouseleave', () => {
        dropdownContent.classList.remove('active');
        dropdownLink.classList.remove('active');
      });
      if (dropdownContent.classList.contains('active')) {
        dropdown.addEventListener('click', (e) => {
          if (e.target.classList.contains('header__dropdown')) {
            dropdownContent.classList.remove('active');
          }
        });
      }
    }
    function mouseleave() {
      dropdownContent.classList.remove('active');
      dropdownLink.classList.remove('active');
    }

    function dropdownClick() {
      dropdown.classList.toggle('active');
      $(dropdownServisesContent).slideToggle();
    }

    listTitle.forEach((list) => {
      function listTitleClick() {
        list.parentElement.classList.toggle('active');
        $(this).parent().find('.list').slideToggle();
      }
      function listTitleResize() {
        if (window.innerWidth > 768) {
          $(list).parent().find('.list').show();
          list.removeEventListener('click', listTitleClick);
        } else {
          $(list).parent().find('.list').hide();
          list.addEventListener('click', listTitleClick);
          list.parentElement.classList.remove('active');
        }
      }
      listTitleResize();
      window.addEventListener('resize', listTitleResize);
    });

    function showContent() {
      if (window.innerWidth < 768) {
        $(dropdownServisesContent).hide();
        dropdown.removeEventListener('mouseenter', mouseenter);
        dropdown.removeEventListener('mouseleave', mouseleave);
        dropdownLink.addEventListener('click', dropdownClick);
        dropdown.classList.remove('active');
      } else {
        $(dropdownServisesContent).show();
        dropdown.addEventListener('mouseenter', mouseenter);
        dropdown.addEventListener('mouseleave', mouseleave);
        dropdownLink.removeEventListener('click', dropdownClick);
      }
    }

    showContent();
    window.addEventListener('resize', showContent);
  });

  const burger = document.querySelector('.header__mob-burger');
  const headerInner = document.querySelector('.header__inner-wrapper');
  const call = document.querySelector('.header__mob-call');

  burger.addEventListener('click', () => {
    if (!burger.classList.contains('active')) {
      burger.classList.add('active');
      burger.parentElement.classList.add('active');
      headerInner.classList.add('active');
      call.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      headerInner.classList.remove('active');
      burger.parentElement.classList.remove('active');
      burger.classList.remove('active');
      call.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      headerInner.classList.remove('active');
      burger.classList.remove('active');
      burger.parentElement.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

function mainHeroSwiper() {
  const swiperOurWorks = new Swiper('.main-hero__swiper', {
    slidesPerView: 1,
    // loop: true,
    allowTouchMove: false,
    // grabCursor: true,
    speed: 1000,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 8000
      // disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.main-hero__swiper-btn--next',
      prevEl: '.main-hero__swiper-btn--prev'
    },

    pagination: {
      el: '.main-hero__progress',
      type: 'progressbar'
    },

    breakpoints: {
      768: {
        autoplay: {
          delay: 60000
        }
      }
    }
  });
}

