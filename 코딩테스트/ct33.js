//정수 내림차순으로 배치하기
function solution(n) {
    n=String(n);
    var arr = [];
    for(let i = 0;i<n.length;i++){
        arr.push(n[i]);
    }
    arr.sort((a,b)=>b-a);
    return Number(arr.join(""));
}
n=118372;
console.log(solution(n));