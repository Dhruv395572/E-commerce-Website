
    function addToCart(image, name, price) {
        
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        
        cart.push({ image, name, price });

        localStorage.setItem('cart', JSON.stringify(cart));

        alert(`${name} has been added to the cart!`);
    }
