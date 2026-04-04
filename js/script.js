/* Shrink Header on Scroll */
const banner = document.querySelector('.top-banner');
const logo = document.querySelector('.logo');

window.addEventListener('scroll', () => {
    if (window.innerWidth > 768) {
        if (window.scrollY > 50) {
            banner.style.height = '90px';
            banner.style.padding = '0 30px';
            logo.style.height = '70px';
        } else {
            banner.style.height = '130px';
            banner.style.padding = '0 50px';
            logo.style.height = '110px';
        }
    } else {
        // Reset or maintain mobile auto height
        banner.style.height = 'auto';
        banner.style.padding = '15px';
        logo.style.height = '80px';
    }
});

/* Intersection Observer for Fade-In Effects */
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // Triggers when 15% of element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Animate only once
        }
    });
}, observerOptions);

// Select all elements that need fade-in
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in, .pizza-item, .category-container, .review-card, .info-block');
    fadeElements.forEach(el => observer.observe(el));
});
