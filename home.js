const validPin = 1234;
// add money features
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
    if (bankAccountNumber.length !== 11) {
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

// CashOut Features

document
  .getElementById("withdraw-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const withdrawAmount = parseInt(
      document.getElementById("cash-out-amount").value
    );
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );
    const pinNumber = parseInt(document.getElementById("cash-out-pin").value);
    const agentAccountNumber = document.getElementById("agent-number").value;
    if (agentAccountNumber.length !== 11) {
      alert("Enter valid 11 digit agent number");
      return;
    }
    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
      alert("Enter a valid amount to withdraw");
      return;
    }
    if (pinNumber !== validPin) {
      alert("enter 4 digit valid pin");
      return;
    }
    const totalNewAvailableBalance = availableBalance - withdrawAmount;
    document.getElementById("available-balance").innerText =
      totalNewAvailableBalance;
    alert(
      `Successfully withdrawed ${withdrawAmount}. New balance: ${totalNewAvailableBalance}`
    );
  });

// Transfer Money Features

document
  .getElementById("transfer-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const transferAmount = parseInt(
      document.getElementById("transfer-amount").value
    );
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );
    const transferPin = parseInt(document.getElementById("transfer-pin").value);
    const userAccountNumber = document.getElementById(
      "user-account-number"
    ).value;
    if (userAccountNumber.length !== 11) {
      alert("Enter valid 11 digit user account number");
      return;
    }
    if (isNaN(transferAmount) || transferAmount <= 0) {
      alert("Enter a valid amount to transfer");
      return;
    }
    if (transferPin !== validPin) {
      alert("enter 4 digit valid pin");
      return;
    }
    const totalNewAvailableBalance = availableBalance - transferAmount;
    document.getElementById("available-balance").innerText =
      totalNewAvailableBalance;
    alert(
      `Successfully transferred ${transferAmount}. New balance: ${totalNewAvailableBalance}`
    );
  });

// toggling features

document
  .getElementById("add-money-button")
  .addEventListener("click", function () {
    document.getElementById("cash-out-parent").style.display = "none";
    document.getElementById("transfer-money-parent").style.display = "none";
    document.getElementById("add-money-parent").style.display = "block";
  });
document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("transfer-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "block";
  });
document
  .getElementById("transfer-money-button")
  .addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "none";
    document.getElementById("transfer-money-parent").style.display = "block";
  });

// Log-out

document.getElementById("logout-btn").addEventListener("click", function () {
  alert("You have been logged out!");
  window.location.href = "./index.html";
});
