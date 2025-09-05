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
// パスワード入力フィールドと送信ボタン、そして2つのモーダルを取得
const passwordInput = document.getElementById('password-input');
const submitButton = document.getElementById('submit-button');
const modal2 = document.getElementById('myModal2');

// 正しいパスワードを設定
const correctPassword = "kawakoigosyogi"; // ← ここを実際のパスワードに変更してください

// OKボタンがクリックされたときの処理
submitButton.addEventListener('click', () => {
    // 入力されたパスワードを取得
    const enteredPassword = passwordInput.value;

    // パスワードを照合
    if (enteredPassword === correctPassword) {
        // パスワードが正しい場合
        modal.style.display = "none"; // modal1 を非表示にする
        modal2.style.display = "block"; // modal2 を表示する
    } else {
        // パスワードが間違っている場合
        alert("パスワードが違います。もう一度お試しください。");
    }
});

// modal2 の close-button2 にもイベントリスナーを設定
document.querySelector('.close-button2').addEventListener('click', () => {
    modal2.style.display = "none";
});
var modal3 = document.getElementById("myModal3");
var editBtn = document.getElementById("edit-button");
var closeBtn3 = document.getElementsByClassName("close-button3")[0];
editBtn.onclick = function() {
  modal3.style.display = "block";
}
closeBtn3.onclick = function() {
  modal3.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// ハンバーガーメニューの開閉機能
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menuContainer = document.querySelector('.menu-container');

    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('open');
        menuContainer.classList.toggle('open');
    });
});
