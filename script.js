// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
    
    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
        });
    });

    // Smooth scrolling for all anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Show sending message
            formStatus.classList.remove('success-message', 'error-message');
            formStatus.style.display = 'block';
            formStatus.textContent = 'جاري إرسال الرسالة...';
            
            try {
                // Get form data
                const formData = {
                    name: document.getElementById('name').value,
                    phone: document.getElementById('phone').value,
                    subject: document.getElementById('subject').value,
                    message: document.getElementById('message').value
                };
                
                // Simulate form submission (in real site, send to the server)
                // Here we're just simulating the process
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                // Success
                formStatus.textContent = 'تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.';
                formStatus.classList.add('success-message');
                contactForm.reset();
                
                // Hide the message after 5 seconds
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 5000);
                
            } catch (error) {
                // Error
                formStatus.textContent = 'حدث خطأ أثناء إرسال الرسالة. الرجاء المحاولة مرة أخرى.';
                formStatus.classList.add('error-message');
            }
        });
    }

    // Animation for elements when scrolling
    const animateElements = document.querySelectorAll('.feature-card, .service-card, .gallery-item, .contact-card');
    
    // Add animation class once the element is in view
    function checkScroll() {
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const viewportHeight = window.innerHeight;
            
            if (elementTop < viewportHeight - 100) {
                element.classList.add('fade-in');
            }
        });
    }
    
    // Run on scroll
    window.addEventListener('scroll', checkScroll);
    
    // Run once on page load
    checkScroll();
    
    // Add fade-in animation style to CSS
    const style = document.createElement('style');
    style.textContent = `
        .feature-card, .service-card, .gallery-item, .contact-card {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .fade-in {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
});