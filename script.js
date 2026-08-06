// script.js

// 1. Initialize AOS Animations (Scroll Effects)
document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        once: true, // Animation ek hi baar hogi scroll karne par
        offset: 50,
        duration: 800,
    });
});

// 2. Mobile Menu Toggle Logic
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
}

// 3. Add to Cart Simulation & Toast Notification
let cartCount = 0;

function addToCart(productName) {
    // Cart ka number update karein
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    
    // Toast Notification show karein
    const toast = document.getElementById("toast");
    toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #4ade80; margin-right: 8px;"></i> ${productName} added to cart!`;
    toast.className = "show";
    
    // 3 second baad toast hide kar dein
    setTimeout(function() { 
        toast.className = toast.className.replace("show", ""); 
    }, 3000);
}

// 4. Sticky Navbar Effect on Scroll
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    // Jab user thoda niche scroll karega
    if (window.scrollY > 10) {
        nav.classList.add('shadow-md');
        nav.classList.replace('top-[40px]', 'top-0'); // Announcement bar hide karke top par set karega
    } else {
        nav.classList.remove('shadow-md');
        nav.classList.replace('top-0', 'top-[40px]');
    }
});
