import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import $ from "jquery";

import { rem } from '../utils/constants';

document.addEventListener('DOMContentLoaded', () => {
    $('.switcher__btn').on('click', function (evt) {
        console.log(123);
        evt.preventDefault();
        let $this = $(this);
        let index = $this.index();
        let $switcher = $this.closest('.switcher');
        let $switcher_container = $switcher.find('.switcher__container');
        let $switcher_contents = $switcher_container.find('.switcher__content');
        $this.siblings('.switcher__btn').removeClass('active');
        $this.addClass('active');
        $switcher_contents.removeClass('active')
        $($switcher_contents[index]).addClass('active');
    })
});