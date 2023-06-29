(function () {
  const dateElement = document.getElementById("date");
  const timeElement = document.getElementById("time");

  const modifyNumber = (number) => {
    return number < 10 ? "0" + number : number;
  };

  const getNowDate = () => {
    const nowDate = new Date();
    const week = [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
    ];
    const month = modifyNumber(nowDate.getMonth() + 1);
    const date = modifyNumber(nowDate.getDate());
    const day = week[nowDate.getDay()];
    setNowDate(month, date, day);
  };

  //오늘의 날짜를 요소에 설정해주는 함수
  const setNowDate = (month, date, day) => {
    dateElement.textContent = `${month}월 ${date}일 ${day}`;
  };

  const getNowtime = () => {
    const nowDate = new Date();
    let hour = modifyNumber(nowDate.getHours());
    let minute = modifyNumber(nowDate.getMinutes());
    setNowTime(hour, minute);
  };

  const setNowTime = (hour, minute) => {
    timeElement.textContent = `${hour} : ${minute}`;
  };

  getNowDate();
  getNowtime();

  //1초마다 시간을 초기화 해주는 코드
  setInterval(getNowtime, 1000);
})();
