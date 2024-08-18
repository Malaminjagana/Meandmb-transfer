// Function to calculate transfer fees
function calculateFees(amount) {
    let fee = Math.ceil(amount / 10); // 1 euro fee for every 10 euros
    return fee;
}

// Function to handle form submission for transfer calculation
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Get the input values
    let fromCurrency = document.getElementById('from-currency').value;
    let toCurrency = document.getElementById('to-currency').value;
    let amount = parseFloat(document.getElementById('amount').value);

    // Check if the amount is a valid number
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    // Calculate the fee
    let fee = calculateFees(amount);
    let total = amount + fee;

    // Display the results
    alert(`From: ${fromCurrency}\nTo: ${toCurrency}\nAmount: €${amount.toFixed(2)}\nFee: €${fee.toFixed(2)}\nTotal: €${total.toFixed(2)}`);
});

// Dynamically update the total when the amount changes
document.getElementById('amount').addEventListener('input', function() {
    let amount = parseFloat(this.value);
    if (!isNaN(amount) && amount > 0) {
        let fee = calculateFees(amount);
        let total = amount + fee;
        document.getElementById('calculated-fee').textContent = `Fee: €${fee.toFixed(2)} | Total: €${total.toFixed(2)}`;
    } else {
        document.getElementById('calculated-fee').textContent = '';
    }
});
