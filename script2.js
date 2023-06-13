function checkDuplicate() {
  // 아이디 중복 확인 로직 구현
  // 중복되는 아이디인 경우
  document.getElementById('id-error').textContent = '이미 사용 중인 아이디입니다.';
  // 중복되지 않는 아이디인 경우
  // document.getElementById('id-error').textContent = ' 사용이 가능한 아이디입니다.';
}

function sendVerificationCode() {
  // 전화번호 인증번호 전송 로직 구현
  alert('인증번호 발송!');
  startTimer();
}

function startTimer() {
  var duration = 180; // 3 minutes in seconds
  var timerElement = document.getElementById('timer');

  var interval = setInterval(function() {
    var minutes = Math.floor(duration / 60);
    var seconds = duration % 60;

    // Add leading zero if needed
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    timerElement.textContent = minutes + ':' + seconds;

    if (duration <= 0) {
      clearInterval(interval);
      timerElement.textContent = '';
    }

    duration--;
  }, 1000);
}
