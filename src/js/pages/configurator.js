import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger,ScrollToPlugin)

// slider
$(document).ready(function () {
    if (!document.querySelector('.promotions__test')) return;
  
    const sections = gsap.utils.toArray('.promotions__banner-right--item');
    const quant = sections.length;
    const scrollStep = 400;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.promotions__test',
        pin: true,
        start: 'top top',
        end: () => '+=' + quant * scrollStep,
      }
    });
  
    gsap.registerPlugin(ScrollTrigger);
  
    gsap.set('.promotions__banner-right--container', {autoAlpha:1});
  
    var allSections = gsap.utils.toArray(".promotions__banner-right--item");
    gsap.set(allSections[0], {position:'fixed'})
    var allSectionsNotFirst = allSections.slice(1);
    gsap.set(allSectionsNotFirst, {position:'absolute', yPercent:100});
  
    var allPhotos = gsap.utils.toArray(".promotions__banner-left--item");
    gsap.set(allPhotos, {position:'fixed'});
    var allPhotosNotFirst = allPhotos.slice(1);
    gsap.set(allPhotos, {autoAlpha:0});
    gsap.set(allPhotos[0], {autoAlpha:1});
  
    // ================
    var allTrigger = gsap.utils.toArray(".trigger");
  
    gsap.set(allTrigger, {visibility:'hidden'})
  
    // ========================
    allSectionsNotFirst.forEach((section, i) => {
      gsap.timeline({
        scrollTrigger:{
          trigger: allTrigger[i],
          start:"top top",
          toggleActions: "play none none reverse",
        }
      })
      .to(section, {
        yPercent:0, 
        duration:0.6, //ease:,
        ease: 'power3.inOut',
      })
    });
    allSectionsNotFirst.forEach((section, i) => {
      gsap.timeline({
        scrollTrigger:{
          trigger: allTrigger[i],
          start:"top top",
          toggleActions: "play none none reverse",
        }
      })
      .to(allSections[i], {
        yPercent:-100, 
        duration:0.6, //ease:,
        ease: 'power3.inOut',
      })
    });
    allSectionsNotFirst.forEach((section, i) => {
      gsap.timeline({
        scrollTrigger:{
          trigger: allTrigger[i],
          start:"top top",
          toggleActions: "play none none reverse",
        }
      })
      .to(allPhotosNotFirst[i], {
        autoAlpha: 1,
        duration: 0.6,
        ease: 'power3.inOut',
      })
    });
  
    // $(window).resize(function () {
    //       changeLandRigsSlider();
    //   });
  
    // function changeLandRigsSlider() {
    //   if (screen.width < 769) {
    //     if ($('.land-rigs').data('platform') != 'desktop') return;
    //     $(".land-rigs").data("platform", "mobile");
    //     ScrollTrigger.disable();
    //     landRigsSwiper.destroy();
    //     landRigsSwiper = new Swiper('.land-rigs__info-slider', {
    //       modules: [Mousewheel, Navigation],
    //       slidesPerView: 1,
    //       navigation: {
    //         nextEl: '.land-rigs__swiper-btn-next',
    //         prevEl: '.land-rigs__swiper-btn-prev',
    //       },
    //       spaceBetween: 30,
    //     });
    //   } else {
    //     if ($('.land-rigs').data('platform') != 'mobile') return;
    //     $(".land-rigs").data("platform", "desktop");
    //     landRigsSwiper.destroy();
    //     const tl = gsap.timeline({
    //       scrollTrigger: {
    //         trigger: '.land-rigs',
    //         pin: true,
    //         start: 'top top',
    //         end: () => '+=' + quant * scrollStep,
    //       }
    //     });
        
    //     ScrollTrigger.enable();
    //     ScrollTrigger.refresh();
    //   }
    // }
  
    // Show more btn
    $('.land-rigs__slide-more-btn').click(function(e) {
      const list = $(this).closest('.land-rigs__slide-text').children('.land-rigs__info-list');
      if (list.css('display') === 'none') {
        list.slideDown(400);
      } else {
        list.slideUp(400);
      }
    });
  
});

// let currentIndex = -1;
// let animating;
// let swipePanels = gsap.utils.toArray(".promotions__baner-container .promotions__banner");

// // set second panel two initial 100%
// gsap.set(".y-100", {yPercent: 100});

// // set z-index levels for the swipe panels
// gsap.set(swipePanels, {
//   zIndex: i => i
// });

// // create an observer and disable it to start
// let intentObserver = ScrollTrigger.observe({
//     type: "wheel,touch",
//     onUp: () => !animating && gotoPanel(currentIndex + 1, true),
//     onDown: () => !animating && gotoPanel(currentIndex - 1, false),
//     wheelSpeed: -1,
//     tolerance: 10,
//     preventDefault: true,
//     onPress: self => {
//       // on touch devices like iOS, if we want to prevent scrolling, we must call preventDefault() on the touchstart (Observer doesn't do that because that would also prevent side-scrolling which is undesirable in most cases)
//       ScrollTrigger.isTouch && self.event.preventDefault()
//     }
// })
// intentObserver.disable();
  
//   // handle the panel swipe animations
//   function gotoPanel(index, isScrollingDown) {
//     animating = true;
//     console.log((index === swipePanels.length && isScrollingDown));
//     console.log((index === -1 && !isScrollingDown));
//     // return to normal scroll if we're at the end or back up to the start
//     if ((index === swipePanels.length && isScrollingDown) || (index === -1 && !isScrollingDown)) {
  
//           let target = index;
//           gsap.to(target, {
//           yPercent: isScrollingDown ? -100 : 0,
//           duration: 0.00,
//           onComplete: () => {
//             animating = false;
//             isScrollingDown && intentObserver.disable();
//           }
//       });
//       return
//     }
  
// //   //   target the second panel, last panel?
//     let target = isScrollingDown ? swipePanels[index]: swipePanels[currentIndex];
  
//     gsap.to(target, {
//       yPercent: isScrollingDown ? 0 : 100,
//       duration: 0.75,
//       onComplete: () => {
//         animating = false;
//       }
//     });
//     currentIndex = index;
//     console.log(index);
  
//   }
  
//   // pin swipe section and initiate observer
// ScrollTrigger.create({
//     trigger: ".promotions__baner-container",
//     pin: true,
//     start: "top top",
//     end: "+=1",
//     onEnter: (self) => {
//       intentObserver.enable();
//       gotoPanel(currentIndex + 1, true);    
//     },
//     onEnterBack: () => {
//       intentObserver.enable();
//       gotoPanel(currentIndex - 1, false);
//     }
// })


// ScrollTrigger.observe({
//     target: window, // can be any element (selector text is fine)
//     type: "wheel,touch", // comma-delimited list of what to listen for ("wheel,touch,scroll,pointer")
//     onUp: () => console.log(555),
//     onDown: () => console.log(1231),
// });