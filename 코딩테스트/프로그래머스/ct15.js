//내적
function solution(a, b) {
    let sum=0;
    for(let i =0;i<a.length;i++){
        sum+=a[i]*b[i];
    }
    return sum;
}
a=[1,2,3,4];
b=[-3,-1,0,2];
console.log(solution(a,b));