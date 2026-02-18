document
  .getElementById("add-money-button")
  .addEventListener("click", function () {
    // 1. get the Bank Name
    const bankName = getInputValues("add-amount-bank-name");
    if (bankName === "Select Bank") {
      alert("Choose Bank");
      return;
    }

    // 2. get the account number and validate
    const accountNumber = getInputValues("add-money-phone-number");
    if (accountNumber.length != 11) {
      alert("Number Invalid");
      return;
    }
    // 3. Checking Pin
    const pin = getInputValues("add-money-password");
    if (pin === "1234") {
      // 3. getting the previous balance
      const money = getElementValues("money");
      const moneyElem = document.getElementById("money");

      // 4. adding Amount
      const amountToAdd = getInputValues("add-money-amount");
      const newAmount = Number(money) + Number(amountToAdd);
      // 5. adding new amount into balance
      moneyElem.innerText = newAmount;
      alert("Money Added Successfully");
    } else {
      alert("Pin is not Correct");
      return;
    }
  });
