document.getElementById("hamburger").addEventListener("click", function() {
    const sideMenu = document.getElementById("side-menu");
    sideMenu.classList.toggle("open");
});

document.addEventListener("click", function(event) {
    const sideMenu = document.getElementById("side-menu");
    const hamburger = document.getElementById("hamburger");

    if (!sideMenu.contains(event.target) && !hamburger.contains(event.target)) {
        sideMenu.classList.remove("open");
    }
});

document.addEventListener("touchstart", function(event) {
    const sideMenu = document.getElementById("side-menu");
    const hamburger = document.getElementById("hamburger");

    if (!sideMenu.contains(event.target) && !hamburger.contains(event.target)) {
        sideMenu.classList.remove("open");
    }
});

document.addEventListener("touchmove", function(event) {
    const sideMenu = document.getElementById("side-menu");
    if (sideMenu.classList.contains("open")) {
        sideMenu.classList.remove("open");
    }
});



document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const product = params.get('product');

    if (product) {
        const productInfo = document.getElementById(product);
        if (productInfo) {
            productInfo.style.display = 'block';
        }
    }

    updateAboutText();
});

function updateAboutText() {
    const aboutText = document.getElementById('about-text');
    if (window.innerWidth <= 600) {
        aboutText.textContent = 'mida';
    } else {
        aboutText.textContent = 'mida';
    }
}

window.onresize = updateAboutText;
