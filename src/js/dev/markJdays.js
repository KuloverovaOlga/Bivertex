import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import { rem } from '../utils/constants';

document.addEventListener('DOMContentLoaded', () => {
  setOurClientsSwiper();
});

function setOurClientsSwiper() {
  const ourClients = new Swiper('.our-clients__swiper', {
    slidesPerView: 1,
    spaceBetween: rem(0.5),
    // loop: true,
    navigation: {
      nextEl: '.our-clients__pagination-btn-next',
      prevEl: '.our-clients__pagination-btn-prev'
    },
    breakpoints: {
      768: {
          slidesPerView: 1.38,
          spaceBetween: 0
      }
  }
  });
}
