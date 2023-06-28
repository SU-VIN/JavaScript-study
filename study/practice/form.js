const inputElement = document.getElementById("input"); //id가 input인거 가져옴

inputElement.addEventListener("mouseover", () => {
  console.log(inputElement.value);
});

const selectElement = document.getElementById("color");

const resultElement = document.getElementById("result");
selectElement.addEventListener("change", () => {
  console.log(selectElement.value);
  resultElement.textContent = selectElement.value;
});
