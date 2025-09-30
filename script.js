// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Navigation scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.padding = '0.5rem 0';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.padding = '1rem 0';
    }
});

// Scroll-triggered animations
document.addEventListener('DOMContentLoaded', () => {
    // Hero section animations
    gsap.to('.hero-title', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top center',
            end: 'bottom center',
            toggleActions: 'play none none reverse'
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.to('.hero-subtitle', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top center',
            end: 'bottom center',
            toggleActions: 'play none none reverse'
        },
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out'
    });

    gsap.to('.cta-button', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top center',
            end: 'bottom center',
            toggleActions: 'play none none reverse'
        },
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.6,
        ease: 'power3.out'
    });

    // Section title animations
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.to(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out'
        });
    });

    // Pizza card animations
    gsap.utils.toArray('.pizza-card').forEach((card, i) => {
        gsap.to(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.2,
            ease: 'power3.out'
        });
    });

    // About section animations
    gsap.utils.toArray('.about-text').forEach(section => {
        gsap.to(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out'
        });
    });

    // Feature progress bars animation
    gsap.utils.toArray('.feature-progress').forEach(progress => {
        ScrollTrigger.create({
            trigger: progress,
            start: 'top 80%',
            onEnter: () => {
                const width = progress.getAttribute('data-width');
                gsap.to(progress, {
                    width: width,
                    duration: 1.5,
                    ease: 'power3.out'
                });
            }
        });
    });

    // Floating ingredients continuous animation
    gsap.to('.floating-pizza', {
        y: '+=20',
        rotation: '+=180',
        duration: 3,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true
    });

    gsap.to('.floating-ingredient', {
        y: '+=15',
        rotation: '+=360',
        duration: 2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true
    });
});

// Form handling
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simple form validation
    const formData = new FormData(this);
    const name = formData.get('name');
    const phone = formData.get('phone');
    
    if (name && phone) {
        // Show success message
        alert('🎉 Order placed successfully! We\'ll contact you soon.');
        this.reset();
    }
});

// Utility function to scroll to sections
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Add some interactive pizza animations
document.querySelectorAll('.pizza-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const visual = card.querySelector('.pizza-visual');
        gsap.to(visual, {
            scale: 1.1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    card.addEventListener('mouseleave', () => {
        const visual = card.querySelector('.pizza-visual');
        gsap.to(visual, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});