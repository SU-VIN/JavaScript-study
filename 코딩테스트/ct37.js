//x만큼 간격이 있는 n개의 숫자
function solution(x, n) {
    var arr=[x];
    for(let i=0;i<n-1;i++){
        arr.push(arr[i]+x);
    }
    return arr;
}
x=2
n=5
console.log(solution(x,n))