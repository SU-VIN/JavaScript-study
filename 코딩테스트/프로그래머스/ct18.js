//자연수 뒤집어 배열로 만들기
function solution(n) {
    var arr = [];
    n = String(n).split("").reverse().join("");
    for(let i =0;i<n.length;i++){
        arr.push(Number(n[i]));
    }
    return arr;
}

n =12345;
console.log(solution(n));