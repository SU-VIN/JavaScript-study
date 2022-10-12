//설탕 배달
let input = require('fs').readFileSync('/dev/stdin');
let x = Number(input);
let three = 0;
let five = 0;

while (true) {
    if (x % 5 === 0) {
        five = x / 5;
        console.log(five + three);
        break;
    }
    if (x < 0) {
        console.log(-1);
        break;
    }
    x = x - 3;
    three++;
}


