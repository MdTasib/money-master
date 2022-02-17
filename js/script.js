document.getElementById("calculate-btn").addEventListener("click", function () {
	const income = getInputValue("income");
	console.log(income);
});

document.getElementById("calculate-btn").addEventListener("click", function () {
	getInputValue("food");
});

document.getElementById("calculate-btn").addEventListener("click", function () {
	getInputValue("rent");
});

document.getElementById("calculate-btn").addEventListener("click", function () {
	getInputValue("clothe");
});

function getInputValue(inputField) {
	const incomeInput = document.getElementById(inputField);
	const incomeAmountText = incomeInput.value;
	const incomeAmount = parseFloat(incomeAmountText);

	return incomeAmount;

	// incomeInput.value = "";
}
