// Select form and table elements
const expenseForm = document.getElementById('myform');
const expenseList = document.getElementById('tablelist');

// Attach event listener to the form
expenseForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload

    // Get form field values
    const description = document.getElementById('descrption').value.trim();
    const category = document.getElementById('category').value;
    const amount = document.getElementById('amount').value.trim();

    // Validation: Ensure all fields are filled and amount is a positive number
    if (!description || !category || isNaN(amount) || amount <= 0) {
        alert("Please fill out all fields with valid data.");
        return;
    }

    // Create a new row for the table
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${description}</td>
        <td>${category}</td>
        <td>${amount}</td>
    `;

    // Append the new row to the expense table
    expenseList.appendChild(newRow);

    // Clear form fields after submission
});
