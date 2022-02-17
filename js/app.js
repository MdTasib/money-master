// get input value
function getInputValue(input) {
	const inputField = document.getElementById(input);

	// validate input
	if (isNaN(inputField.value) || inputField.value == "") {
		return alert("Please give a valid number in - " + input);
		// return errorHandle("Please give a valid number");
	} else if (inputField.value < 0) {
		return alert("Please give a positive number - " + input);
		// return errorHandle("Please give a positive number");
	} else {
		const inputAmountText = inputField.value;
		const inputAmount = parseFloat(inputAmountText);
		return inputAmount;
	}
}

// total expenses function
function getTotalExpense() {
	// expenses
	const foodExpenses = getInputValue("food");
	const rentExpenses = getInputValue("rent");
	const clotheExpenses = getInputValue("clothe");

	if (
		isNaN(foodExpenses) ||
		isNaN(rentExpenses) ||
		isNaN(clotheExpenses) ||
		foodExpenses < 0 ||
		rentExpenses < 0 ||
		clotheExpenses < 0
	) {
		return (document.getElementById("total-expenses").innerText = "000");
	} else {
		// expenses convert to number
		const totalExpensesField = document.getElementById("total-expenses");

		// total expenses count
		const totalExpensesCount = foodExpenses + rentExpenses + clotheExpenses;

		// The value of total expenses is displayed
		totalExpensesField.innerText = totalExpensesCount;

		return totalExpensesCount;
	}
}

// calculate button handler
document.getElementById("calculate-btn").addEventListener("click", function () {
	const income = getInputValue("income");
	const totalExpensesCount = getTotalExpense();

	// income balance and total expenses amount check
	if (income < totalExpensesCount) {
		// return alert("Expenses balance should be less stable than income balance.");
		return errorHandle(
			"Expenses balance should be less stable than income balance."
		);
	} else if (isNaN(income) || income < 0) {
		document.getElementById("total-balance").innerText = "000";
	} else {
		// count balance amount
		const balanceCount = income - totalExpensesCount;
		const balanceField = document.getElementById("total-balance");
		balanceField.innerText = balanceCount;
	}
});

// save button handler
document.getElementById("save-btn").addEventListener("click", function () {
	const income = getInputValue("income");
	const savingInput = getInputValue("saving-input");

	// saving amount
	const savingAmount = (income * savingInput) / 100;
	if (income < savingAmount) {
		return alert("Saving balance should be less stable than income balance.");
	} else {
		// display saving amount
		document.getElementById("saving-amount").innerText = savingAmount;

		const totalBalance = document.getElementById("total-balance");
		const remainingAmount = parseFloat(totalBalance.innerText) - savingAmount;
		document.getElementById("remaining-balance").innerText = remainingAmount;
	}
});
