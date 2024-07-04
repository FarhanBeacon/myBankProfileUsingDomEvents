document.getElementById("btn-deposit").addEventListener("click", function () {
  const depositAmount = getInputElementByID("deposit-amount");

  const currentDeposit = getTextElementByID("total-deposit");

  const totalDeposit = depositAmount + currentDeposit;

  document.getElementById("deposit-amount").value = "";

  if(isNaN(depositAmount) || depositAmount <= 0){
    alert('invalid amount!!!!');
    return;
  }

  const currentBalance = getTextElementByID("total-balance");

  const totalBalance = currentBalance + depositAmount;

  setTextElementByID("total-deposit", totalDeposit);

  setTextElementByID("total-balance", totalBalance);
});
