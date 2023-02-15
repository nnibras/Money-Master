document.getElementById("calculate-btn").addEventListener("click", function () {
  const income = getTextValue("income");
  const food = getTextValue("food");
  const rent = getTextValue("rent");
  const lifeStyle = getTextValue("lifeStyle");

  const totalExpense = food + rent + lifeStyle;

  const balance = income - totalExpense;

  if (isNaN(totalExpense) || isNaN(balance)) alert("Fields cannot be empty!!!");
  else if (income < 0 || food < 0 || rent < 0 || lifeStyle < 0)
    alert("Fields cannot be negative!!!");
  else if (totalExpense > income) {
    alert("You do not have sufficient income!!!");
    setText(0, "balance");
    setText(totalExpense, "totalExpense");
    setText("", "savingAmount");
    setText("", "remainingBalance");
  } else {
    setText(balance, "balance");
    setText(totalExpense, "totalExpense");
  }
});
