function submitData() {
  const principal = parseFloat(document.getElementById('principal').value);
  const rate = parseFloat(document.getElementById('rate').value);
  const years = parseInt(document.getElementById('years').value);

  if (
    isNaN(principal) ||
    isNaN(rate) ||
    isNaN(years) ||
    principal < 0 ||
    rate < 0 ||
    years < 0
  ) {
    updateDOM('Please enter valid positive numbers.', 'error');
    return;
  }

  computeFutureValue(principal, rate, years);
}

function computeFutureValue(principal, rate, years) {
  const monthlyRate = rate / 100 / 12;

  const months = years * 12;

  let balance = principal;

  for (let i = 0; i < months; i++) {
    balance += balance * monthlyRate;
  }

  updateDOM(
    `After ${years} months, your investment will be worth $${balance.toFixed(
      2
    )}.`,
    'success'
  );
}

function updateDOM(value, colorClass) {
  const resultElement = document.getElementById('result');
  resultElement.textContent = value;

  resultElement.className = colorClass;
}
