document.getElementById('transfer-money-button').addEventListener('click', function(){
    // 1 -> get the account number and validate
    const accNo = getInputValues('transfer-money-number');
    if(accNo.length < 0){
        alert('Account Number is Invalid, Try Again!');
        return;
    }

    // 2 -> get amount and previous amount
    const amountToTransfer = getInputValues('transfer-money-amount');
    const amountElement = document.getElementById('money');
    const previousAmount = getElementValues('money');

    // 3 -> get the pin, validate and build logic inside if
    const pin = getInputValues('transfer-money-pin');
    if( pin === '1234' ){
        newBalance = Number(previousAmount) - Number(amountToTransfer);
        if(newBalance < 0){
            alert('Invalid Amount');
            return;
        }
        amountElement.innerText = newBalance;

        /**
         * Creating History
         */

        // Getting The container
        const histroyContainer = document.getElementById('card-container');

        // Creating New Div
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
            <div class="card-body p-5 bg-base-100 mt-3 rounded-lg">
                You have Transferred ${amountToTransfer} dollar
                at ${new Date}.
            </div>
        `;

        // Appending to the container
        histroyContainer.appendChild(newDiv);

        alert('Transfer Money Successful');
        return;
    }
    else{
        alert('Your Pin is wrong');
        return;
    }
});