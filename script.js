// Get all the buttons and spans
const incrementButtons = document.querySelectorAll('.increment');
const decrementButtons = document.querySelectorAll('.decrement');
const deleteButtons = document.querySelectorAll('.delete');
const likeButtons = document.querySelectorAll('.like');
const quantitySpans = document.querySelectorAll('.quantity');
const totalPriceSpan = document.getElementById('total-price');

let totalPrice = 0;

// Increase quantity when + button is clicked
incrementButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const quantity = parseInt(quantitySpans[index].textContent);
        quantitySpans[index].textContent = quantity + 1;
        calculateTotalPrice();
    });
});

// Decrease quantity when - button is clicked
decrementButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const quantity = parseInt(quantitySpans[index].textContent);
        if (quantity > 0) {
            quantitySpans[index].textContent = quantity - 1;
            calculateTotalPrice();
        }
    });
});

// Delete item when delete button is clicked
deleteButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const quantity = parseInt(quantitySpans[index].textContent);
        totalPrice -= quantity;
        quantitySpans[index].textContent = 0;
        calculateTotalPrice();
    });
});

// Like item when like button is clicked
likeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        button.classList.toggle('liked');
    });
});

// Calculate and update total price
function calculateTotalPrice() {
    totalPrice = 0;
    quantitySpans.forEach((span) => {
        const quantity = parseInt(span.textContent);
        totalPrice += quantity;
    });
    totalPriceSpan.textContent = totalPrice;
} 