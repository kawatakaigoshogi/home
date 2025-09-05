const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide a');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const totalImages = images.length;
let currentImageIndex = 0;
let slideInterval;
function startAutoSlide(){
  slideInterval = setInterval(() => {
    currentImageIndex++;
    if(currentImageIndex >= totalImages){
      currentImageIndex = 0;
    }
    updateCarousel();
  },5000);
}
function stopAutoSlide(){
  clearInterval(slideInterval);
}
function updateCarousel(){
  const slideWidth = images[0].offsetWidth;
  carouselSlide.style.transform = `translateX(${-slideWidth * currentImageIndex}px)`
}
nextButton.addEventListener('click',() => {
  stopAutoSlide();
  currentImageIndex++;
  if(currentImageIndex >= totalImages){
    currentImageIndex = 0;
  }
  updateCarousel();
  startAutoSlide();
});
prevButton.addEventListener('click',() => {
  stopAutoSlide();
  currentImageIndex--;
  if(currentImageIndex < 0){
    currentImageIndex = totalImages - 1;
  }
  updateCarousel();
  startAutoSlide();
});
document.addEventListener('DOMContentLoaded',() => {
  startAutoSlide();
});

var modal = document.getElementById("myModal");
var openBtn = document.getElementById("open-button");
var closeBtn = document.getElementsByClassName("close-button")[0];
openBtn.onclick = function() {
  modal.style.display = "block";
}
closeBtn.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const menuContainer = document.querySelector('.menu-container');

    hamburger.addEventListener('click', () => {
        menuContainer.classList.toggle('active');
    });
});
