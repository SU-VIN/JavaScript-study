//하샤드 수
function solution(x) {
    x=String(x);
    var sum=0;
    for(let i=0;i<x.length;i++){
        sum+=Number(x[i]);
    }
    return x%sum==0?true:false;
}
x=12;
console.log(solution(x));