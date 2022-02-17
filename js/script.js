// get input value
function getInputValue(input) {
	const inputField = document.getElementById(input);

	// validate input
	if (isNaN(inputField.value) || inputField.value == "") {
		return alert("Please give a valid number in - " + input);
	} else if (inputField.value < 0) {
		return console.log("Please give a positive number - " + input);
	} else {
		const inputAmountText = inputField.value;
		const inputAmount = parseFloat(inputAmountText);
		return inputAmount;
	}

	// inputField.value = "";
}

// total expenses function
function getTotalExpense() {
	// expenses
	const foodExpenses = getInputValue("food");
	const rentExpenses = getInputValue("rent");
	const clotheExpenses = getInputValue("clothe");

	// expenses convert to number
	const totalExpensesField = document.getElementById("total-expenses");
	const totalExpensesText = totalExpensesField.innerText;
	const previousTotalExpensesAmount = parseFloat(totalExpensesText);

	// total expenses count
	const totalExpensesCount =
		previousTotalExpensesAmount + foodExpenses + rentExpenses + clotheExpenses;

	// The value of total expenses is displayed
	totalExpensesField.innerText = totalExpensesCount;

	return totalExpensesCount;
}

document.getElementById("calculate-btn").addEventListener("click", function () {
	const income = getInputValue("income");
	const totalExpensesCount = getTotalExpense();

	// income balance and total expenses amount check
	if (income < totalExpensesCount) {
		return alert("Expenses balance should be less stable than income balance.");
	} else {
		// count balance amount
		const balanceCount = income - totalExpensesCount;
		const balanceField = document.getElementById("total-balance");
		balanceField.innerText = balanceCount;
	}
});

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
	}
});
