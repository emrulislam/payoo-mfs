const validPin = 1234;

// Reuseable function to get input field value

function getInputValueNumber(id) {
  return parseInt(document.getElementById(id).value);
}
function getInputValue(id) {
  return document.getElementById(id).value;
}

// reuseable function to get inner text

function getInput(id) {
  return parseInt(document.getElementById(id).innerText);
}

// reuseable function to get inner text

function setAvailableBalance(newBalance) {
  document.getElementById("available-balance").innerText = newBalance;
}

// reuseable function to toggle handle

function toggleHandle(id){
  const forms = document.getElementsByClassName("form")
  for(const form of forms){
    form.style.display="none"
  }
  document.getElementById(id).style.display="block"
}

// add money features

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const bankName = getInputValue("bank-name");
    const bankAccountNumber = getInputValue("bank-account-number");
    const addAmount = getInputValueNumber("add-amount");
    const PinNumber = getInputValueNumber("pin-number");
    const availableBalance = getInput("available-balance");
    if (bankAccountNumber.length !== 11 || isNaN(bankAccountNumber)) {
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
    setAvailableBalance(totalNewAvailableBalance);
    alert(
      `Successfully added ${addAmount}. New balance: ${totalNewAvailableBalance}`
    );
  });

// CashOut Features

document
  .getElementById("withdraw-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const agentAccountNumber = getInputValue("agent-number");
    const withdrawAmount = getInputValueNumber("cash-out-amount");
    const availableBalance = getInput("available-balance");
    const pinNumber = getInputValueNumber("cash-out-pin");

    if (agentAccountNumber.length !== 11 || isNaN(agentAccountNumber)) {
      alert("Enter valid 11 digit agent number");
      return;
    }
    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
      alert("Enter a valid amount to withdraw");
      return;
    }
    if (pinNumber !== validPin) {
      alert("Enter 4 digit valid pin");
      return;
    }
    if (withdrawAmount > availableBalance) {
      alert("Insufficient balance");
      return;
    }

    const totalNewAvailableBalance = availableBalance - withdrawAmount;
    setAvailableBalance(totalNewAvailableBalance);
    alert(
      `Successfully withdrew ${withdrawAmount}. New balance: ${totalNewAvailableBalance}`
    );
  });

// Transfer Money Features

document
  .getElementById("transfer-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const userAccountNumber = getInputValue("user-account-number");
    const transferAmount = getInputValueNumber("transfer-amount");
    const availableBalance = getInput("available-balance");
    const transferPin = getInputValueNumber("transfer-pin");

    if (userAccountNumber.length !== 11 || isNaN(userAccountNumber)) {
      alert("Enter valid 11 digit user account number");
      return;
    }
    if (isNaN(transferAmount) || transferAmount <= 0) {
      alert("Enter a valid amount to transfer");
      return;
    }
    if (transferPin !== validPin) {
      alert("Enter 4 digit valid pin");
      return;
    }
    if (transferAmount > availableBalance) {
      alert("Insufficient balance");
      return;
    }

    const totalNewAvailableBalance = availableBalance - transferAmount;
    setAvailableBalance(totalNewAvailableBalance);

    alert(
      `Successfully transferred ${transferAmount}. New balance: ${totalNewAvailableBalance}`
    );
  });

// Get Bonus Features
// Pay Bill Features
// Transaction Histories features

// toggling features

document
  .getElementById("add-money-button")
  .addEventListener("click", function () {
    // document.getElementById("cash-out-parent").style.display = "none";
    // document.getElementById("transfer-money-parent").style.display = "none";
    // document.getElementById("add-money-parent").style.display = "block";
    toggleHandle("add-money-parent")
  });
document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    // document.getElementById("add-money-parent").style.display = "none";
    // document.getElementById("transfer-money-parent").style.display = "none";
    // document.getElementById("cash-out-parent").style.display = "block";
    toggleHandle("cash-out-parent")
  });
document
  .getElementById("transfer-money-button")
  .addEventListener("click", function () {
    // document.getElementById("add-money-parent").style.display = "none";
    // document.getElementById("cash-out-parent").style.display = "none";
    // document.getElementById("transfer-money-parent").style.display = "block";
    toggleHandle("transfer-money-parent")
  });

// Log-out features

document.getElementById("logout-btn").addEventListener("click", function () {
  alert("You have been logged out!");
  window.location.href = "./index.html";
});
