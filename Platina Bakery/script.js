window.addEventListener("DOMContentLoaded", () => {
	const discountTable = document.getElementById("discountTable");
	const currentDay = new Date().getDay(); // 0: Sunday, 1: Monday, ..., 6: Saturday

	const discounts = {
		0: 15,
		1: 10,
		2: 12,
		3: 11,
		4: 13,
		5: 14,
		6: 15,
	};

	// Set the discount for the current day
	const currentRow = discountTable.rows[currentDay];
	const discountCell = currentRow.cells[1];
	discountCell.textContent = `${discounts[currentDay]}%`;

	// Apply styling to the current day's row
	currentRow.classList.add("current-day");
});

let isFirstBill = true; // Flag to track if it's the first bill

function submitBill() {
	const billAmountInput = document.getElementById("billAmount");
	const billAmount = parseFloat(billAmountInput.value);

	if (isNaN(billAmount)) {
		alert("Invalid bill amount. Please enter a valid number.");
		return;
	}

	let discountPercentage = 0;

	if (isFirstBill) {
		const discountTable = document.getElementById("discountTable");
		const currentDay = new Date().getDay(); // 0: Sunday, 1: Monday, ..., 6: Saturday
		const currentRow = discountTable.rows[currentDay];
		discountPercentage = parseFloat(currentRow.cells[1].textContent);
		isFirstBill = false;
	}

	const discountAmount = (billAmount * discountPercentage) / 100;
	const discountedTotal = billAmount - discountAmount;

	alert(`Bill Amount: Rs.${billAmount.toFixed(2)}
Discount Percentage: ${discountPercentage}%
Discount Amount: Rs.${discountAmount.toFixed(2)}
Discounted Total: Rs.${discountedTotal.toFixed(2)}`);
}
