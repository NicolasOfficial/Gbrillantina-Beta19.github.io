document.addEventListener('DOMContentLoaded', () => {
    const catalogs = document.querySelectorAll('.catalog');
    const productDetails = document.getElementById('product-details');
    const productImage = document.getElementById('product-image');
    const productTitle = document.getElementById('product-title');
    const productDescription = document.getElementById('product-description');
    const closeButton = document.getElementById('close-button');
    

    catalogs.forEach(catalog => {
        const products = catalog.querySelectorAll('.product');
        
        products.forEach(product => {
            product.addEventListener('click', () => {
                const title = product.getAttribute('data-title');
                const description = product.getAttribute('data-description');
                const image = product.getAttribute('data-image');
                

                productImage.src = image;
                productTitle.textContent = title;
                productDescription.textContent = description;
                

                productDetails.style.display = 'block';
                setTimeout(() => {
                    productDetails.classList.add('show');
                    catalogs.forEach(cat => cat.classList.add('blur'));
                }, 10); // Slight delay to trigger CSS transition
                document.body.classList.add('modal-open');
            });
        });
    });

    closeButton.addEventListener('click', () => {
        productDetails.classList.remove('show');
        catalogs.forEach(catalog => catalog.classList.remove('blur'));
        setTimeout(() => {
            productDetails.style.display = 'none';
        }, 300); // Delay matches the CSS transition duration
        document.body.classList.remove('modal-open');
    });
});