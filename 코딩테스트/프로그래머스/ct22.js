//최솟값 만들기
function solution(A,B){
    A=A.sort((a,b)=>a-b);
    B=B.sort((a,b)=>b-a);
    var sum = 0;
    for(let i = 0;i<A.length;i++){
        sum += A[i]*B[i];
    }
    return sum;
}
A = [1,4,2]; //1 2 4
B = [5,4,4]; //5 4 4
console.log(solution(A,B));