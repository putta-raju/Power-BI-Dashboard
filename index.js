/**
 * Putta Rajkumar - Interactive Logic & UI Controller
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Initialize Lucide Icons
    if (window.lucide) {
        lucide.createIcons();
    }

    // 2. Dynamic Year Output in Footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 3. Mobile Hamburger Menu Toggle
    const hamburgerBtn = document.getElementById('hamburger-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (hamburgerBtn && mobileDrawer) {
        hamburgerBtn.addEventListener('click', () => {
            mobileDrawer.classList.toggle('open');
        });

        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileDrawer.classList.remove('open');
            });
        });
    }

    // 4. Scroll Active Highlighting on Navbar Links
    const sections = document.querySelectorAll('.scroll-target, #about');
    const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // 5. Testimonial Carousel Mechanics
    const track = document.getElementById('testimonial-track');
    if (track) {
        const slides = Array.from(track.children);
        const nextButton = document.getElementById('next-btn');
        const prevButton = document.getElementById('prev-btn');
        const dotsNav = document.getElementById('carousel-dots');
        const dots = Array.from(dotsNav.children);

        let currentIndex = 0;

        const updateCarousel = (targetIndex) => {
            slides.forEach((slide, idx) => {
                slide.classList.toggle('current-slide', idx === targetIndex);
            });
            dots.forEach((dot, idx) => {
                dot.classList.toggle('active-dot', idx === targetIndex);
            });
            currentIndex = targetIndex;
        };

        if (nextButton) {
            nextButton.addEventListener('click', () => {
                const nextIndex = (currentIndex + 1) % slides.length;
                updateCarousel(nextIndex);
            });
        }

        if (prevButton) {
            prevButton.addEventListener('click', () => {
                const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
                updateCarousel(prevIndex);
            });
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                updateCarousel(index);
            });
        });
    }
});