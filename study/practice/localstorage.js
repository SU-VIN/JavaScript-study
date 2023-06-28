const idElement = document.getElementById("id");
const pwdElement = document.getElementById("pwd");
const loginButton = document.getElementById("login-button");

const userIdElement = document.getElementById("userId");
const userPwdElement = document.getElementById("userPwd");

const userLoginInfo = JSON.parse(localStorage.getItem("userInfo"));

userIdElement.textContent = `${userLoginInfo.id}`;
userPwdElement.textContent = `${userLoginInfo.pwd}`;

loginButton.addEventListener("click", () => {
  //   console.log(idElement.value);
  //   console.log(pwdElement.value);
  //   localStorage.setItem("id", idElement.value);
  //   localStorage.setItem("pwd", pwdElement.value);
  //   window.alert("로그인 성공");

  let userInfo = { id: idElement.value, pwd: pwdElement.value };
  localStorage.setItem("userInfo", JSON.stringify(userInfo));
});
