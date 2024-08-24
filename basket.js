document.querySelectorAll('.quantity').forEach(input => {
    input.addEventListener('change', updateTotal);
});

document.querySelectorAll('.remove-item').forEach(button => {
    button.addEventListener('click', removeItem);
});

function updateTotal() {
    let total = 0;
    document.querySelectorAll('tbody tr').forEach(row => {
        const price = parseFloat(row.querySelector('td:nth-child(3)').textContent.replace(' руб.', '').replace(',', '.'));
        const quantity = parseInt(row.querySelector('.quantity').value);
        const cost = price * quantity;
        row.querySelector('td:nth-child(5)').textContent = cost.toFixed(2) + ' руб.';
        total += cost;
    });
    document.querySelector('.total-amount').textContent = total.toFixed(2) + ' руб.';
}

function removeItem(event) {
    event.target.closest('tr').remove();
    updateTotal();
}
