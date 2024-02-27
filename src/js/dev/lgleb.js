import '../components/areas';

window.addEventListener('DOMContentLoaded', () => {
  newsDropdown();
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
