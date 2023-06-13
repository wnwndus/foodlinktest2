function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // 로그인 처리 로직

  var isLoggedIn = true; // 로그인이 성공했다고 가정

  if (isLoggedIn) {
    var loginForm = document.getElementById("loginForm");
    loginForm.style.display = "none";

    var loggedInUser = document.getElementById("loggedInUser");
    var usernameDisplay = document.getElementById("usernameDisplay");
    usernameDisplay.innerHTML = "환영합니다, " + username + "님";
    loggedInUser.style.display = "block";
  }
}

const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');

  if (usernameInput.value.trim() === '' || passwordInput.value.trim() === '') {
    alert('아이디와 비밀번호를 입력하세요.');
  } else {
    window.location.href = 'homepage17.html';
  }
});
