document.getElementById('payment-button').addEventListener('click', function(){
    // 1 -> get the payment type
    const paymentType = getInputValues('payment-type-name');
    if (paymentType === 'Select Payment Option'){
        alert('Select Payment Type');
        return;
    }
    // 2 -> get the biller account number and validate
    const accountNumber = getInputValues('payment-number');
    if(accountNumber.length != 11){
        alert('Number is Invalid');
        return;
    }
    // 3 -> get the amount to pay and balance
    const amountToPay = getInputValues('amount-to-pay');
    const balance = getElementValues('money');
    const BalanceElement = document.getElementById('money');

    // 4 -> get the pin and validate and writing payment logic
    const pin = getInputValues('payment-password');
    if(pin === '1234'){
        const newBalance = Number(balance) - Number(amountToPay);
        if(newBalance < 0){
            alert('Invalid Amount');
            return;
        }

        /**
         * Transaction History
         */
        // 1 -> pulling the history container
        const historyContainer = document.getElementById('card-container');

        // 2 -> creating the element
        const newDiv = document.createElement('div');
        if(paymentType === 'Electricity Bill'){
            newDiv.innerHTML = `
            <div class="card-body p-5 bg-base-100 mt-3 rounded-lg flex flex-row gap-3 justify-start items-center">
                <img class ="shrink-0 h-[24px] w-[24px]" src ="./assets/opt-1.png" alt="image" />
                <div>
                    <h2 class = "font-semibold opacity-70">Electricity Bill</h2>
                    <p class = "opacity-70 text-[0.75rem]">${(new Date)}</p>
                </div>
            </div>
            `;
        
        }
        else if(paymentType === 'Bank Deposit'){
            newDiv.innerHTML = `
            <div class="card-body p-5 bg-base-100 mt-3 rounded-lg flex flex-row gap-3 justify-start items-center">
                <img class ="shrink-0 h-[24px] w-[24px]" src ="./assets/opt-1.png" alt="image" />
                <div>
                    <h2 class = "font-semibold opacity-70">Bank Deposit</h2>
                    <p class = "opacity-70 text-[0.75rem]">${(new Date)}</p>
                </div>
            </div>
            `;
        
        }
        else if(paymentType === 'Mobile Recharge'){
            newDiv.innerHTML = `
            <div class="card-body p-5 bg-base-100 mt-3 rounded-lg flex flex-row gap-3 justify-start items-center">
                <img class ="shrink-0 h-[24px] w-[24px]" src ="./assets/opt-1.png" alt="image" />
                <div>
                    <h2 class = "font-semibold opacity-70">Mobile Recharge</h2>
                    <p class = "opacity-70 text-[0.75rem]">${(new Date)}</p>
                </div>
            </div>
            `;
        
        }
        else if(paymentType === 'Gas Bill'){
            newDiv.innerHTML = `
            <div class="card-body p-5 bg-base-100 mt-3 rounded-lg flex flex-row gap-3 justify-start items-center">
                <img class ="shrink-0 h-[24px] w-[24px]" src ="./assets/opt-1.png" alt="image" />
                <div>
                    <h2 class = "font-semibold opacity-70">Gas Bill</h2>
                    <p class = "opacity-70 text-[0.75rem]">${(new Date)}</p>
                </div>
            </div>
            `;
        
        }
        historyContainer.appendChild(newDiv);


        BalanceElement.innerText = newBalance;
        alert('Payment Successful');
        return;
    }
    else{
        alert('Your pin is not correct');
        return;
    }
});