
        document.addEventListener('DOMContentLoaded', () => {
          const hamburger = document.querySelector('.hamburger-menu');
          const menuContainer = document.querySelector('.menu-container');

          hamburger.addEventListener('click', () => {
            menuContainer.classList.toggle('open');
          });
        });