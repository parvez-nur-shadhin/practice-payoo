document.getElementById('cashout-button').addEventListener('click', function(){
    // 1. get the account number
    const number = getInputValues('cashout-number');
    console.log(number);
    if(number.length != 11){
        alert('Number is invalid');
        return;
    }
    // 2. get the amount to withdraw
    const amount = getInputValues('cashout-amount');
    const amountElement = getElementValues('money');
    const amountElementChange = document.getElementById('money');
    
    // 3. pin validation
    const pin = getInputValues('cashout-pin');
    if(pin === '1234'){
        // 4. new Amount calculating
        const newAmount = Number(amountElement) - Number(amount);
        if(newAmount < 0){
            alert('Invalid Amount');
            return;
        }
        
        // 5. Replacing recent Amount
        amountElementChange.innerText = newAmount;

        alert('Cashout Successful');
    }
    else{
        alert('Pin is not Correct');
        return;
    }
});