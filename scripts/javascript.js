const track = document.querySelector('.slider-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let currentIndex = 0;

function updateSlider() {
  const slideWidth = slides[0].getBoundingClientRect().width + 20; // include margin
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

nextButton.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateSlider();
  }
});

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

window.addEventListener('resize', updateSlider);

// Voor elk product in de hoofd-slider
document.querySelectorAll('.product-carousel').forEach(carousel => {
    const track = carousel.querySelector('.photo-track');
    const photos = Array.from(track.children);
    const nextBtn = carousel.querySelector('.next-photo');
    const prevBtn = carousel.querySelector('.prev-photo');
    let currentIndex = 0;

    function updatePhoto() {
        const width = photos[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${currentIndex * width}px)`;
    }

    nextBtn.addEventListener('click', () => {
        if (currentIndex < photos.length - 1) {
            currentIndex++;
            updatePhoto();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updatePhoto();
        }
    });

    window.addEventListener('resize', updatePhoto);
});

function myFunction() {
  var menu = document.getElementById("mylinks");
  menu.classList.toggle("show");
}

