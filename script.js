document.addEventListener('DOMContentLoaded', function() {
    // Add a subtle animation to the contact button on hover
    const contactButton = document.querySelector('.contact-button');
    
    contactButton.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    contactButton.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });

    // Add a simple fade-in animation to sections as they come into view
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.5s ease-out';
        observer.observe(section);
    });
}); 
