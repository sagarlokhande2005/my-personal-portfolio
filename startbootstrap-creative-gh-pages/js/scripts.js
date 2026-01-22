/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    /* ================= NAVBAR SHRINK ================= */
    const navbarShrink = () => {
        const navbar = document.body.querySelector('#mainNav');
        if (!navbar) return;

        if (window.scrollY === 0) {
            navbar.classList.remove('navbar-shrink');
        } else {
            navbar.classList.add('navbar-shrink');
        }
    };

    // Initial check
    navbarShrink();
    // Shrink navbar on scroll
    document.addEventListener('scroll', navbarShrink);

    /* ================= SCROLLSPY ================= */
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    }

    /* ================= COLLAPSE NAV ON LINK CLICK ================= */
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const navLinks = document.querySelectorAll('#navbarResponsive .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    /* ================= SIMPLE LIGHTBOX ================= */
    if (window.SimpleLightbox) {
        new SimpleLightbox({
            elements: '#portfolio a.portfolio-box'
        });
    }

    /* ================= TYPING ANIMATION ================= */
    const texts = ["AI & ML Enthusiast", "Python Developer", "Future ML Engineer"];
    let i = 0, j = 0;
    const typingEl = document.getElementById("typing");

    const type = () => {
        if (j < texts[i].length) {
            typingEl.textContent += texts[i][j++];
            setTimeout(type, 80);
        } else {
            setTimeout(erase, 1500);
        }
    };

    const erase = () => {
        if (j > 0) {
            typingEl.textContent = texts[i].substring(0, j--);
            setTimeout(erase, 50);
        } else {
            i = (i + 1) % texts.length;
            setTimeout(type, 300);
        }
    };
    type();

    /* ================= DAY/NIGHT MODE ================= */
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Load saved theme
    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-mode');
        themeToggle.textContent = '🌞';
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        if (body.classList.contains('light-mode')) {
            themeToggle.textContent = '🌞';
            localStorage.setItem('theme', 'light');
        } else {
            themeToggle.textContent = '🌙';
            localStorage.setItem('theme', 'dark');
        }
    });

});