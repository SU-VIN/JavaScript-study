const week = ["일", "월", "화", "수", "목", "금", "토"];
let nowDate = new Date("2023-06-28");
let month = nowDate.getMonth() + 1;
let date = nowDate.getDate();
let day = nowDate.getDay();
console.log(month, date, week[day]);
