document.getElementById("save-btn").addEventListener("click", function () {
  const save = getTextValue("save");
  const income = getTextValue("income");
  const food = getTextValue("food");
  const rent = getTextValue("rent");
  const lifeStyle = getTextValue("lifeStyle");

  const saveAmount = parseInt((save / 100) * income);

  const totAmt = saveAmount + food + rent + lifeStyle;

  const remBalance = parseInt(income - totAmt);

  const totalExpense = food + rent + lifeStyle;

  const balance = income - totalExpense;

  if (isNaN(totalExpense) || isNaN(balance)) alert("Fields cannot be empty!!!");
  else if (income < 0 || food < 0 || rent < 0 || lifeStyle < 0 || save < 0) {
    alert("Fields cannot be negative!!!");
  } else if (totalExpense > income) {
    alert("You do not have sufficient income!!!");
    setText(0, "balance");
    setText(totalExpense, "totalExpense");
    setText("", "savingAmount");
    setText("", "remainingBalance");
  } else if (isNaN(save)) {
    alert(
      "Please enter the percentage of your income that you would like to save!!!"
    );
    setText("", "savingAmount");
    setText("", "remainingBalance");
  } else if (saveAmount > balance) {
    alert(
      "You cannot save now, because the amount you want to save is higher than the balance you have!!!"
    );
    setText("", "savingAmount");
    setText("", "remainingBalance");
  } else {
    setText(saveAmount, "savingAmount");
    setText(remBalance, "remainingBalance");
  }
});
