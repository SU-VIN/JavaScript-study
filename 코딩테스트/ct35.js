//점프와 순간 이동
function solution(n){
    var count = 0;
    while(n>0){
        if(n%2!==0){
            n=(n-1)/2;
            count++
        }else{
            n=n/2
        }
    }
    return count;
}
n=6;
console.log(solution(n))