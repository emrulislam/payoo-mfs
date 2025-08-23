const validPin = 1234;
const validCoupon ="PAYOO";

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

// reuseable function to set inner text

function setAvailableBalance(newBalance) {
  document.getElementById("available-balance").innerText = newBalance;
}

// reuseable function to toggle handle

function toggleHandle(id) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

// Reuseable function to toggle feature buttons active status

function toggleFeatureButton(id) {
  const featureButtons = document.getElementsByClassName("feature-buttons");
  for (const featureButton of featureButtons) {
    featureButton.classList.remove("border-[#0874F2]");
    featureButton.classList.add("border-[#0808081a]");
  }
  document.getElementById(id).classList.remove("border-[#0808081a]");
  document.getElementById(id).classList.add("border-[#0874F2]");
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
document.getElementById("get-bonus-btn").addEventListener("click",function(e){
  e.preventDefault();
  const promoCode = getInputValue("user-coupon-number")
  if(promoCode === validCoupon){
    alert("Successfully redeemed your coupon")
  }
  else{
    alert("Enter Correct coupon.Coupons are case sensitive")
  }
})
// Pay Bill Features
document
  .getElementById("payment-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const billerAccountNumber = getInputValue("biller-account-number");
    const paymentAmount = getInputValueNumber("payment-amount");
    const availableBalance = getInput("available-balance");
    const paymentPin = getInputValueNumber("payment-pin");

    if (billerAccountNumber.length !== 11 || isNaN(billerAccountNumber)) {
      alert("Enter valid 11 digit biller account number");
      return;
    }
    if (isNaN(paymentAmount) || paymentAmount <= 0) {
      alert("Enter a valid amount to transfer");
      return;
    }
    if (paymentPin !== validPin) {
      alert("Enter 4 digit valid pin");
      return;
    }
    if (paymentAmount > availableBalance) {
      alert("Insufficient balance");
      return;
    }

    const totalNewAvailableBalance = availableBalance - paymentAmount;
    setAvailableBalance(totalNewAvailableBalance);

    alert(
      `Successfully paid ${paymentAmount}. New balance: ${totalNewAvailableBalance}`
    );
  });
// Transaction Histories features

// toggling features

document
  .getElementById("add-money-button")
  .addEventListener("click", function () {
    toggleHandle("add-money-parent");
    toggleFeatureButton("add-money-button");
  });
document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    toggleHandle("cash-out-parent");
    toggleFeatureButton("cash-out-button");
  });
document
  .getElementById("transfer-money-button")
  .addEventListener("click", function () {
    toggleHandle("transfer-money-parent");
    toggleFeatureButton("transfer-money-button");
  });
  document.getElementById("get-bonus-button").addEventListener("click",function(){
    toggleHandle("get-bonus-parent");
    toggleFeatureButton("get-bonus-button")
  })
 document.getElementById("pay-bill-button").addEventListener("click",function(){
    toggleHandle("pay-bill-parent");
    toggleFeatureButton("pay-bill-button")
  })
  document.getElementById("transactions-button").addEventListener("click",function(){
    toggleHandle("transaction-history-parent");
    toggleFeatureButton("transactions-button")
  })
// Log-out features

document.getElementById("logout-btn").addEventListener("click", function () {
  alert("You have been logged out!");
  window.location.href = "./index.html";
});
