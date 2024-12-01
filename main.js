document.addEventListener('DOMContentLoaded', function () {
    const addToCartButton = document.querySelector("#add-to-cart");
    const checkoutButton = document.querySelector("#checkout");
    const quantityInput = document.querySelector("#quantity");
    const totalPrice = document.querySelector("#total-price");

    // Update total price based on quantity
    quantityInput.addEventListener('input', function() {
        const quantity = quantityInput.value;
        const price = 44.99;
        const total = (price * quantity).toFixed(2);
        totalPrice.textContent = `Total: $${total}`;
    });

    // Add to Cart button functionality
    addToCartButton.addEventListener("click", function() {
        alert(`Added ${quantityInput.value} Portable Padded Dog Crate(s) to your cart for $${totalPrice.textContent.slice(7)}.`);
    });

    // Checkout functionality
    checkoutButton.addEventListener("click", function() {
        let userConfirmation = confirm("Proceed to Checkout for the Portable Padded Dog Crate?");
        if (userConfirmation) {
            alert("Thank you for your purchase! You will be redirected to payment.");
            window.location.href = "https://www.examplecheckout.com";
        }
    });
});
