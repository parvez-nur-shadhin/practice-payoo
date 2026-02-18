// Login Button Event 
document.getElementById('login-button').addEventListener('click', function(){
    // 1. Checking Number and validating;
    const number = getInputValues('login-phone-number');
    if(number.length != 11){
        alert('Number must be in 11 digit');
        return;
    }

    // Checking Pin and validating;
    const pin = getInputValues('login-password');
    if(pin === '1234'){
        alert('Login Successful');
        window.location.assign("./home.html");
    }
    else{
        alert('Your Pin is not Correct Try Again');
        return;
    }

});