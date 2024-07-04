document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawAmount = getInputElementByID("withdraw-amount");

  const currentWithdraw = getTextElementByID("total-withdraw");

  const totalWithdraw = withdrawAmount + currentWithdraw;

  document.getElementById("withdraw-amount").value = "";

  const currentBalance = getTextElementByID("total-balance");

  if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
    alert("invalid amount!!!!");
    return;
  } else if (withdrawAmount > currentBalance){
    alert("Insufficient Amount");
    return;
  }

  const totalBalance = currentBalance - withdrawAmount;

  setTextElementByID("total-withdraw", totalWithdraw);

  setTextElementByID("total-balance", totalBalance);
});
