const validPin = 1234;
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const bankName = document.getElementById("bank-name").value;
    const bankAccountNumber = document.getElementById(
      "bank-account-number"
    ).value;
    const addAmount = parseInt(document.getElementById("add-amount").value);
    const PinNumber = parseInt(document.getElementById("pin-number").value);
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );
    if (bankAccountNumber.length < 11) {
      alert("Enter Valid account number");
      return;
    }
    if (isNaN(addAmount) || addAmount <= 0) {
      alert("Enter a valid amount to add");
      return;
    }
    if (PinNumber !== validPin) {
      alert("enter 4 digit valid pin");
      return;
    }
    const totalNewAvailableBalance = availableBalance + addAmount;
    document.getElementById("available-balance").innerText =
      totalNewAvailableBalance;
    alert(
      `Successfully added ${addAmount}. New balance: ${totalNewAvailableBalance}`
    );
  });

  document.getElementById("add-money-button").addEventListener("click",function(){
    document.getElementById("cash-out-parent").style.display="none";
    document.getElementById("add-money-parent").style.display="block";
  })
  document.getElementById("cash-out-button").addEventListener("click",function(){
    document.getElementById("add-money-parent").style.display="none";
    document.getElementById("cash-out-parent").style.display="block";
  })