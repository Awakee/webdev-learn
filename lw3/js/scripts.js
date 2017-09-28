function validate(form){
  var userEmail = $("#email").val();
  var userPass = $("#password").val();
  var userPassCheck = $("#passwordcheck").val();
  var userAgreement = $("#checkagreement").prop("checked");
  var emailCheck = (/[^\s@]+@[^\s@]+\.[^\s@]+/.test(userEmail));

  if ((userEmail.length < 5) || (!emailCheck)) {
    alert("Ошибка ввода Email.");
    windows.stop();
  }

  if ((userPass.length < 6) || (userPass == "") || (userPassCheck == "")) {
    alert("Ошибка ввода пароля");
    windows.stop();
  }

  if (!(userPass = userPassCheck)) {
    alert("Пароли должны совпадать");
    windows.stop();
  }

  if (!userAgreement){
    alert("Вы должны принять пользовательское соглашение");
    windows.stop();
  }
};