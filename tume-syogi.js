// ハンバーガーメニューの開閉機能
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menuContainer = document.querySelector('.menu-container');

    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('open');
        menuContainer.classList.toggle('open');
    });
});
