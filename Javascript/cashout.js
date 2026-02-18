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

        /**
       * Transaction History
       */
      // pulling the card container
      const histroyContainer = document.getElementById("card-container");

      // creating new element
      const newDiv = document.createElement("div");
      newDiv.innerHTML = `
      <div class="card-body p-5 bg-base-100">
            You Have deducted ${amount} dollar in your account.
            at ${new Date()}.
      </div>
      `;
      // appending element in the transaction container
        histroyContainer.appendChild(newDiv);

        alert('Cashout Successful');
    }
    else{
        alert('Pin is not Correct');
        return;
    }
});