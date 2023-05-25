window.addEventListener('DOMContentLoaded', function() {
    const carouselItems = document.querySelectorAll('.carousel__item');
    const colorPickers = document.querySelectorAll('.color-picker');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;
  
    function showSlide(index) {
      carouselItems.forEach(function(item) {
        item.classList.remove('active');
      });
      carouselItems[index].classList.add('active');
    }
  
    function handlePrev() {
      currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
      showSlide(currentIndex);
    }
  
    function handleNext() {
      currentIndex = (currentIndex + 1) % carouselItems.length;
      showSlide(currentIndex);
    }
  
    prevBtn.addEventListener('click', handlePrev);
    nextBtn.addEventListener('click', handleNext);
  
    colorPickers.forEach(function(picker) {
      picker.addEventListener('change', function() {
        const slide = picker.closest('.carousel__item');
        const color = picker.value;
        slide.style.backgroundColor = color;
      });
    });
  
    showSlide(currentIndex);
  });
  