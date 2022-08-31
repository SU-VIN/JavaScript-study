const num = [1,2,3,4,5]

function isOdd(currentNum){
    return currentNum % 2 === 1;
}

const filter = num.filter(isOdd);
const filter1 = num.filter(currentNumber => currentNumber % 2 === 1);

console.log(filter1);