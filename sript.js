// Typed.js configuration
var typed = new Typed(".text", {
    strings: ["DATA SCIENTIST", "DATA ANALYST", "ML ENGINEER", "PYTHON DEVELOPER"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Throttling scroll event handler
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Function to handle scroll event and active link
function handleScroll() {
    const top = window.scrollY;
    
    sections.forEach(sec => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
            });
        }
    });
}

// Throttling function to limit the number of scroll events processed
function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function() {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    }
}

// Apply throttled scroll event handler
window.addEventListener('scroll', throttle(handleScroll, 200));  // 200ms throttle delay
const offset = sec.offsetTop - (window.innerWidth < 768 ? 100 : 150); // Adjust offset for small screens

