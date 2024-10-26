function redirectToProduct(productName) {
    window.location.href = `info-products.html?product=${productName}`;
}

document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
        card.classList.add('animate');
    });
});
