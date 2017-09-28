function validate(form){
    var userEmail = document.getElementById('email');
    var userPass = document.getElementById('password');
    var userPassCheck = document.getElementById('password.check');
    var userAgreement = document.getElementById('check.agreement');  
    
    var emailCheck = (/[^\s@]+@[^\s@]+\.[^\s@]+/.test(userEmail.value));
    

    if ((userEmail.value.length < 5) || (!emailCheck)) {
        alert("Ошибка ввода Email.");
    }

    if ((userPass.value.length < 6) || (userPass = "") || (userPassCheck = "")) {
        alert("Ошибка ввода пароля");
    }

    if (!(userPass.value == userPassCheck.value)) {
       alert("Пароли должны совпадать");
    }

    if (!userAgreement.checked){
        alert("Вы должны принять пользовательское соглашение");
    }
};