// Logout button
document.getElementById('button-logOut').addEventListener('click', function(){
    window.location.assign('./index.html')
});
// Input Value Machine:
function getInputValues(id){
    const input = document.getElementById(id);
    const value = input.value;
    return value;
};
// Element Value Machine:
function getElementValues(id){
    const element = document.getElementById(id);
    const value = element.innerText;
    return value;
};
// hidden machine
function showOnly(id) {
    // 1. pulling the section;
    const addMoney = document.getElementById('add-money');
    const cashout = document.getElementById('cashout');
    const transaction = document.getElementById('transaction');
    const transferMoney = document.getElementById('transfer-money');
    const getBonus = document.getElementById('get-bonus');

    // 2. putting the hidden class
    addMoney.classList.add('hidden');
    cashout.classList.add('hidden');
    transaction.classList.add('hidden');
    transferMoney.classList.add('hidden');
    getBonus.classList.add('hidden');
    
    // 3. removing Hidden
    const showOnly = document.getElementById(id);
    showOnly.classList.remove('hidden');
};