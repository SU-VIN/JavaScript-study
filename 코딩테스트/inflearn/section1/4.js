//1부터 N까지의 합
function solution(n){
    var sum=0;
    for(let i=1;i<=n;i++){
        sum+=i
    }
    return sum

}

console.log(solution(10));