const carouselSlide = document.querySelector(".carousel-slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.querySelectorAll(".carousel-slide img");
  const slideCount = slides.length;
  
  if (n > slideCount) {
    slideIndex = 1;
  }
  
  if (n < 1) {
    slideIndex = slideCount;
  }
  
  carouselSlide.style.transform = `translateX(${-100 * (slideIndex - 1)}%)`;
}

prevBtn.addEventListener("click", () => {
  plusSlides(-1);
});

nextBtn.addEventListener("click", () => {
  plusSlides(1);
});
