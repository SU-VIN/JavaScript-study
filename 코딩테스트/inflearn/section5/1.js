//두 배열 합치기
function solution(arr1, arr2){
    const arr= a.concat(b)
    arr.sort((a,b)=>a-b)
    return arr
}

let a=[1, 3, 5];
let b=[2, 3, 6, 7, 9];
console.log(solution(a, b));
