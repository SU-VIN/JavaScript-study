const num = [1,2,3,4,5]

function isOdd(currentNum){
    return currentNum % 2 === 1;
}

const filter = num.filter(isOdd);
const filter1 = num.filter(currentNumber => currentNumber % 2 === 1);

console.log(filter1);

console.log("오늘은 쉬어가는날. 수빈아 사랑해");
