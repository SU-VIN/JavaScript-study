//option + shift + b
//요소에 접근
console.log(document.getElementById("date"));
console.log(document.querySelector("div.date"));
console.log(document.getElementsByClassName("date"));
console.log(document.getElementsByTagName("div"));

//attribute에 접근하고 값 변경하기
console.log(document.getElementById("date").className); //id가 date인 요소의 클래스이름을 뽑아라
const dateElement = document.getElementById("date");
dateElement.className = "change";

console.log(dateElement);

console.log(document.getElementById("date").id);
const dateElement2 = document.getElementById("date").id;
dateElement2.id = "change";
console.log(dateElement2);

//classList
const dateElement3 = document.getElementById("date");
dateElement3.classList.add("change");
//-> class이름이 date -> date change로 변경
dateElement3.classList.remove("date");
//date change -> change

//text값 변경
const clockElement = document.getElementById("clock");
clockElement.textContent = "20:23";

//요소 추가
const seasonElement = document.createElement("div");
seasonElement.classList.add("season");
const seasonText = document.createTextNode("summer");

//추가한 요소가 나타나지 않는다 왜? -> 생성만 한거지 돔트리에 추가한건 아님
console.log(document.getElementsByTagName("div"));

const parent = document.querySelector("div.today-info");
parent.appendChild(seasonElement);
parent.appendChild(seasonText);

//버튼요소생성
const buttonElement = document.createElement("div");
buttonElement.classList.add("button");
buttonElement.textContent = "버튼";

//스타일
buttonElement.style.backgroundColor = "gray";
buttonElement.style.color = "white";
buttonElement.style.width = "50px";
buttonElement.style.textAlign = "center";
buttonElement.style.cursor = "pointer";

//추가
const parent2 = document.querySelector("div.clock");
parent2.appendChild(buttonElement);

buttonElement.addEventListener("click", () => {
  window.alert("클릭");
});

console.log(document.getElementsByTagName("div"));
