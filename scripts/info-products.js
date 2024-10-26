document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const product = params.get('product');

    if (product) {
        const productInfo = document.getElementById(product);
        if (productInfo) {
            productInfo.style.display = 'block';
        }
    }
});
