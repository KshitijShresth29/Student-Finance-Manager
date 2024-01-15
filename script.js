function calculateBalance() {
    const incomeInput = document.getElementById('income');
    const expensesInput = document.getElementById('expenses');

    const income = parseFloat(incomeInput.value) || 0;
    const expenses = parseFloat(expensesInput.value) || 0;

    const totalIncome = document.getElementById('totalIncome');
    const totalExpenses = document.getElementById('totalExpenses');
    const balance = document.getElementById('balance');
    const resultDiv = document.getElementById('result');

    totalIncome.textContent = income.toFixed(2);
    totalExpenses.textContent = expenses.toFixed(2);
    balance.textContent = (income - expenses).toFixed(2);

    resultDiv.classList.remove('hidden');
}

