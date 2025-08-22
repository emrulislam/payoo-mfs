document.getElementById("add-money-btn").addEventListener("click",function(e){
e.preventDefault()
const bankName=document.getElementById("bank-name").value;
const bankAccountNumber=document.getElementById("bank-account-number").value;
const addAmount =parseInt(document.getElementById("add-amount").value);
const PinNumber=parseInt(document.getElementById("pin-number").value);
const availableBalance =parseInt(document.getElementById("available-balance").innerText);
const totalNewAvailableBalance= availableBalance+addAmount;
document.getElementById("available-balance").innerText=totalNewAvailableBalance
})