// get input value
function getInputValue(input) {
	const inputField = document.getElementById(input);
	const inputAmountText = inputField.value;
	const inputAmount = parseFloat(inputAmountText);

	return inputAmount;

	// inputField.value = "";
}

// total expenses function
function getTotalExpense() {
	// expenses
	const foodExpenses = getInputValue("food");
	const rentExpenses = getInputValue("rent");
	const clotheExpenses = getInputValue("clothe");

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

	const balanceCount = income - totalExpensesCount;
	const balanceField = document.getElementById("total-balance");
	balanceField.innerText = balanceCount;
});
