import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import $ from "jquery";

import { rem } from '../utils/constants';

document.addEventListener('DOMContentLoaded', () => {
    $('.switcher__btn').on('click', function (evt) {
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
    $('.benchs__desk-img').on('click', function (evt) {
        evt.preventDefault();
        let $this = $(this);
        let index = $this.index();
        let $switcher = $this.closest('.benchs__desk-container');
        let $switcher_container = $switcher.find('.benchs__desk-center');
        let $switcher_contents = $switcher_container.find('.benchs__desk-big');
        $this.siblings('.benchs__desk-img').removeClass('active');
        $this.addClass('active');
        $switcher_contents.removeClass('active')
        $($switcher_contents[index]).addClass('active');
    })

    const benchs__btns = new Swiper('.benchs__btns', {
        slidesPerView: 'auto',
        spaceBetween: rem(1.2),
        navigation: {
            nextEl: ".benchs__swiper--right",
            prevEl: ".benchs__swiper--left",
        },
    });

    $(".benchs__mob-selector--top").on("click", function () {
        $('.benchs__mob-selector--bottom').slideToggle()
    });
    $(".benchs__mob-selector--item").on("click", function () {
        $('.benchs__mob-selector--item').removeClass('active')
        $(this).addClass('active')
        let index = $(this).index();
        $(".benchs__mob-selector--top").find('span').text($(this).text())
        $('.enchs__mob-content').removeClass('active')
        $($('.enchs__mob-content')[index]).addClass('active');
        // Swithc ADD!
        $('.benchs__mob-selector--bottom').slideToggle()
    });

    const benchs__mob_swiper = new Swiper('.benchs__mob-swiper', {
        slidesPerView: 1,
    });

});