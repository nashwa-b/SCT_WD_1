//scroll effect
window.addEventListener('scroll',
    function () {
        const navbar =
            document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

// Hamburger toggle
document.getElementById('hamburger')
    .addEventListener('click', function
        () {
        document.querySelector('.nav-links')
            .classList.toggle('active');
    });

