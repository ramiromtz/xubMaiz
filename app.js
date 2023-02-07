const navbar = document.getElementById('navbar'),
upArrow = document.querySelector('.up a');

// Fixed navigation
window.addEventListener('scroll', () => {
    if (window.scrollY >= 80) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// Arrow up
window.addEventListener('scroll', () => {
    window.scrollY >= 600 ? upArrow.style.display = "block" : upArrow.style.display = "none";
});

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.scrollY;
    
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.items a[href*=' + sectionId + ']').classList.add('active');
        } else {
            document.querySelector('.items a[href*=' + sectionId + ']').classList.remove('active');
        }
    });
}

window.addEventListener('scroll', scrollActive);