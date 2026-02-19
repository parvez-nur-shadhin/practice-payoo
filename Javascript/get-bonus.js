document.getElementById('get-bonus-button').addEventListener('click', function(){
    // 1 -> get the bonus coupon
    const coupon = getInputValues('get-bonus-coupon');
    if(coupon === 'GET500'){
        // 2 -> Get The Previous Balance
        const Balance = getElementValues('money');
        const BalanceElement = document.getElementById('money');

        // 3 -> add 500 dollar to the account
        const newBalance = Number(Balance) + 500;
        BalanceElement.innerText = newBalance;
        alert('You got 500 dollar bonus from Coupon');
        return;
    }
    else{
        alert('Coupon Data not found');
        return;
    }
});