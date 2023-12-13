let billAmountEl = document.getElementById("billAmount");
let percentageTipEl = document.getElementById("percentageTip");
let tipAmountEl = document.getElementById("tipAmount");
let totalAmountEl = document.getElementById("totalAmount");
let errorMessageEl = document.getElementById("errorMessage");
let calculateButton = document.getElementById("calculateButton")


calculateButton.onclick = function() {
    let inputBillAmount = billAmountEl.value;
    let inputPercentageTip = percentageTipEl.value;

    if (inputBillAmount === "" || inputPercentageTip === "") {
        errorMessageEl.textContent = "Please Enter a Valid Input";
    } else {
        errorMessageEl.textContent = '';
        let billAmount = parseInt(inputBillAmount);
        let percentageTip = parseInt(inputPercentageTip);
        let calculatedTip = (percentageTip / 100) * billAmount;
        let totalAmount = billAmount + calculatedTip;
        tipAmountEl.value = Math.floor(calculatedTip);
        totalAmountEl.value = Math.floor(totalAmount);
    }
}
