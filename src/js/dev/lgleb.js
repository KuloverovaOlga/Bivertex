import '../components/areas';

window.addEventListener('DOMContentLoaded', () => {
  newsDropdown();
  promotionsAcc();
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
  const accordion = document.querySelector('.promotions__block-acc'),
    accordionItems = accordion.querySelectorAll('.promotions__block-acc--point'),
    accordionImages = accordion.querySelectorAll('.promotions__block-acc--img'),
    initHeight = accordionItems[0].clientHeight;

  let activeIndex = 0;

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
};
