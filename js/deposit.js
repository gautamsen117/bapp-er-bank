// step-1: add event listener to the doposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2: get the deposit amount from the deposit input field
    // For input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    // step-3: get the current deposit total amount
    // For non-input(element other than input, texarea) use .innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousdepositTotalString = depositTotalElement.innerText;
    const previousdepositTotal = parseFloat(previousdepositTotalString);
    // step-4: add numbers to set the total doposit
    const currentDepositTotal = previousdepositTotal + newDepositAmount;
    // set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    // step-5: get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    // step-7: clear the deposit field
    depositField.value = '';
})