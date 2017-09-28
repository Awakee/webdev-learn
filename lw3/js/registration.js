function registration(){
  var userEmail = document.getElementById('email');
  var userPass = document.getElementById('password');
  var userPassCheck = document.getElementById('password_repeat');
  var userAgreement = document.getElementById('check_agreement');  
  var emailCheck = (/[^\s@]+@[^\s@]+\.[^\s@]+/.test(userEmail.value));

  if ((userEmail.value == "") || (userPass.value == "") || (userPassCheck.value == "")){
    alert("Ошибка ввода."); 
    windows.stop();
  }else{
    if ((userEmail.value.length < 5) || (!emailCheck)) {
        alert("Ошибка ввода Email.");
        windows.stop();
    }

    if ((userPass.value.length < 6) || (userPass == "") || (userPassCheck == "")) {
        alert("Ошибка ввода пароля");
        windows.stop();
    }

    if ((userPass.value != userPassCheck.value)) {
        alert("Пароли должны совпадать");
        windows.stop();
    }

    if (!userAgreement.checked){
        alert("Вы должны принять пользовательское соглашение");
        windows.stop();
    }

    alert("Регистрация успешна");
    }
};
