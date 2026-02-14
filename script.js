// ============================================
// MURAD KHAN PORTFOLIO - ADVANCED ANIMATIONS
// Automation Engineer & Agentic AI Developer Portfolio
// ============================================

// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// PRELOADER ANIMATION
const initLoader = () => {
    const loader = document.querySelector('.loader');
    const loaderText = document.querySelectorAll('.loader-text span');
    const loaderProgress = document.querySelector('.loader-progress');

    const tl = gsap.timeline({
        onComplete: () => {
            gsap.to(loader, {
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                    loader.style.display = 'none';
                    initMainAnimations();
                }
            });
        }
    });

    tl.to(loaderText, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'back.out(1.7)' });
    tl.to(loaderProgress, { width: '100%', duration: 1.5, ease: 'power2.inOut' }, '-=0.3');
};

// CURSOR GLOW EFFECT
const initCursorGlow = () => {
    const cursorGlow = document.querySelector('.cursor-glow');
    document.addEventListener('mousemove', (e) => {
        gsap.to(cursorGlow, { x: e.clientX, y: e.clientY, duration: 0.3, ease: 'power2.out' });
    });
};

// PARTICLE BACKGROUND
const initParticles = () => {
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 80;

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.opacity = Math.random() * 0.5 + 0.2;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }
        draw() {
            ctx.fillStyle = `rgba(16, 185, 129, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    const init = () => { for (let i = 0; i < particleCount; i++) particles.push(new Particle()); };

    const connectParticles = () => {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 150) {
                    const opacity = (1 - distance / 150) * 0.15;
                    ctx.strokeStyle = `rgba(16, 185, 129, ${opacity})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    };

    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(particle => { particle.update(); particle.draw(); });
        connectParticles();
        requestAnimationFrame(animate);
    };

    init();
    animate();
    window.addEventListener('resize', () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; });
};

// NAVIGATION
const initNavigation = () => {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    });

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        if (hamburger.classList.contains('active')) {
            gsap.to(hamburger.querySelectorAll('span')[0], { rotation: 45, y: 8, duration: 0.3 });
            gsap.to(hamburger.querySelectorAll('span')[1], { opacity: 0, duration: 0.3 });
            gsap.to(hamburger.querySelectorAll('span')[2], { rotation: -45, y: -8, duration: 0.3 });
        } else {
            gsap.to(hamburger.querySelectorAll('span'), { rotation: 0, y: 0, opacity: 1, duration: 0.3 });
        }
    });

    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            gsap.to(hamburger.querySelectorAll('span'), { rotation: 0, y: 0, opacity: 1, duration: 0.3 });
        });
    });

    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) current = section.getAttribute('id');
        });
        navLinksItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
        });
    });
};

// SMOOTH SCROLL
const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            }
        });
    });
};

// MAIN ANIMATIONS (GSAP)
const initMainAnimations = () => {
    const heroTl = gsap.timeline();
    heroTl
        .from('.hero-badge', { opacity: 0, y: 30, duration: 0.6, ease: 'power3.out' })
        .from('.title-line', { opacity: 0, y: 30, duration: 0.6, ease: 'power3.out' }, '-=0.3')
        .from('.title-name', { opacity: 0, y: 50, duration: 0.8, ease: 'power3.out' }, '-=0.3')
        .from('.title-role', { opacity: 0, y: 30, duration: 0.6, ease: 'power3.out' }, '-=0.4')
        .from('.hero-description', { opacity: 0, y: 30, duration: 0.6, ease: 'power3.out' }, '-=0.3')
        .from('.hero-cta .btn', { opacity: 0, y: 20, duration: 0.5, stagger: 0.1, ease: 'power3.out' }, '-=0.3')
        .from('.stat-item', { opacity: 0, y: 20, duration: 0.5, stagger: 0.1, ease: 'power3.out' }, '-=0.3')
        .from('.hero-image-wrapper', { opacity: 0, scale: 0.8, duration: 0.8, ease: 'back.out(1.5)' }, '-=0.6')
        .from('.floating-card', { opacity: 0, scale: 0, duration: 0.5, stagger: 0.15, ease: 'back.out(1.7)' }, '-=0.4')
        .from('.scroll-indicator', { opacity: 0, y: -20, duration: 0.5, ease: 'power3.out' }, '-=0.2');

    const statNumbers = document.querySelectorAll('.stat-number[data-count]');
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        gsap.to(stat, { innerText: target, duration: 2, ease: 'power1.out', snap: { innerText: 1 }, scrollTrigger: { trigger: stat, start: 'top 80%' } });
    });

    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.from(header, { opacity: 0, y: 50, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: header, start: 'top 80%' } });
    });

    gsap.from('.about-img-wrapper', { opacity: 0, x: -50, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: '.about-content', start: 'top 70%' } });
    gsap.from('.about-text', { opacity: 0, x: 50, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: '.about-content', start: 'top 70%' } });
    gsap.from('.feature', { opacity: 0, x: -30, duration: 0.5, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.about-features', start: 'top 80%' } });

    gsap.utils.toArray('.skill-item').forEach(item => {
        const skillValue = item.getAttribute('data-skill');
        const progressBar = item.querySelector('.skill-progress');
        gsap.to(progressBar, { width: `${skillValue}%`, duration: 1.5, ease: 'power2.out', scrollTrigger: { trigger: item, start: 'top 85%' } });
    });

    gsap.utils.toArray('.skill-category').forEach((category, i) => {
        gsap.from(category, { opacity: 0, y: 50, duration: 0.6, delay: i * 0.1, ease: 'power3.out', scrollTrigger: { trigger: category, start: 'top 85%' } });
    });

    gsap.from('.tech-icon', { opacity: 0.5, scale: 0.8, duration: 0.4, stagger: 0.05, ease: 'back.out(1.7)', scrollTrigger: { trigger: '.tech-icons', start: 'top 95%' } });

    gsap.utils.toArray('.project-card').forEach((card, i) => {
        gsap.from(card, { opacity: 0, y: 60, duration: 0.6, delay: i * 0.1, ease: 'power3.out', scrollTrigger: { trigger: card, start: 'top 85%' } });
    });

    gsap.utils.toArray('.service-card').forEach((card, i) => {
        gsap.from(card, { opacity: 0, y: 50, duration: 0.6, delay: i * 0.15, ease: 'power3.out', scrollTrigger: { trigger: card, start: 'top 85%' } });
    });

    gsap.from('.contact-info', { opacity: 0, x: -50, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: '.contact-wrapper', start: 'top 70%' } });
    gsap.from('.contact-form-wrapper', { opacity: 0, x: 50, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: '.contact-wrapper', start: 'top 70%' } });
    gsap.from('.footer-content > div', { opacity: 0, y: 30, duration: 0.6, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.footer', start: 'top 85%' } });
};

// PROJECT FILTER
const initProjectFilter = () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    gsap.to(card, { opacity: 1, scale: 1, duration: 0.4, ease: 'power3.out' });
                    card.style.display = 'block';
                } else {
                    gsap.to(card, { opacity: 0, scale: 0.8, duration: 0.4, ease: 'power3.out', onComplete: () => { card.style.display = 'none'; } });
                }
            });
        });
    });
};

// EMAILJS INIT
emailjs.init('hxPpG8mBtd92uXxIt');

// CONTACT FORM (EmailJS)
const initContactForm = () => {
    const form = document.getElementById('contactForm');
    const submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
        submitBtn.disabled = true;

        const templateParams = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            title: document.getElementById('subject').value || 'Contact from Portfolio',
            message: document.getElementById('message').value
        };

        emailjs.send('service_e0mxsqb', 'template_1dxu2sa', templateParams)
            .then(() => {
                showNotification('Message sent successfully!', 'success');
                form.reset();
            })
            .catch(() => {
                showNotification('Failed to send. Please try again.', 'error');
            })
            .finally(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            });
    });
};

// NOTIFICATION
const showNotification = (message, type) => {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `<i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i><span>${message}</span>`;
    notification.style.cssText = `position: fixed; bottom: 30px; right: 30px; padding: 16px 24px; background: ${type === 'success' ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' : '#ef4444'}; color: white; border-radius: 12px; display: flex; align-items: center; gap: 12px; font-weight: 500; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3); z-index: 10000; transform: translateX(120%);`;
    document.body.appendChild(notification);
    gsap.to(notification, { x: 0, duration: 0.5, ease: 'back.out(1.7)' });
    setTimeout(() => { gsap.to(notification, { x: '120%', duration: 0.5, ease: 'power3.in', onComplete: () => notification.remove() }); }, 3000);
};

// BACK TO TOP
const initBackToTop = () => {
    const backToTop = document.getElementById('backToTop');
    backToTop.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) gsap.to(backToTop, { opacity: 1, visibility: 'visible', duration: 0.3 });
        else gsap.to(backToTop, { opacity: 0, visibility: 'hidden', duration: 0.3 });
    });
};

// TILT EFFECT ON CARDS
const initTiltEffect = () => {
    const cards = document.querySelectorAll('.project-card, .service-card, .skill-category');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            gsap.to(card, { rotateX: rotateX, rotateY: rotateY, transformPerspective: 1000, duration: 0.3, ease: 'power2.out' });
        });
        card.addEventListener('mouseleave', () => { gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.5, ease: 'power2.out' }); });
    });
};

// MAGNETIC BUTTONS
const initMagneticButtons = () => {
    const buttons = document.querySelectorAll('.btn-primary, .nav-cta');
    buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.3, ease: 'power2.out' });
        });
        btn.addEventListener('mouseleave', () => { gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.5)' }); });
    });
};

// TEXT REVEAL ANIMATION
const initTextReveal = () => {
    gsap.utils.toArray('.gradient-text').forEach(text => {
        gsap.from(text, { backgroundPosition: '200% center', duration: 1.5, ease: 'power3.out', scrollTrigger: { trigger: text, start: 'top 80%' } });
    });
};

// PARALLAX EFFECT
const initParallax = () => {
    gsap.utils.toArray('.gradient-orb').forEach(orb => {
        gsap.to(orb, { y: -100, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 } });
    });
};

// INITIALIZE ALL
document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initCursorGlow();
    initParticles();
    initNavigation();
    initSmoothScroll();
    initProjectFilter();
    initContactForm();
    initBackToTop();
    initTiltEffect();
    initMagneticButtons();
    initTextReveal();
    initParallax();
});

// Fallback if GSAP fails to load
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.querySelector('.loader');
        if (loader && loader.style.display !== 'none') loader.style.display = 'none';
    }, 5000);
});

// Neon theme particles: rgba(0, 212, 255, ...) — commented out for future use
console.log('%c Murad Khan Portfolio Loaded Successfully! ', 'background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; font-size: 14px; padding: 10px 20px; border-radius: 5px;');
