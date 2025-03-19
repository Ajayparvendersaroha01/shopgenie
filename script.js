let cart = [];

function addToCart(product) {
    cart.push(product);
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    // Update the cart UI based on the cart array
    let cartItems = document.querySelector('.cart-items');
    cartItems.innerHTML = ''; // Clear existing items

    cart.forEach((product, index) => {
        let item = document.createElement('div');
        item.classList.add('cart-item');
        item.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div>
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
        cartItems.appendChild(item);
    });

    // Update the total price
    let total = cart.reduce((sum, product) => sum + product.price, 0);
    document.querySelector('.cart-summary p').textContent = `Total: $${total.toFixed(2)}`;
}
