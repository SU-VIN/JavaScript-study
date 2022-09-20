//멀리뛰기
function solution(n) {
    var dp = [0,1,2];
    for(let i=3;i<=n;i++){
        dp[i]=(dp[i-1]+dp[i-2]);
    }
    return dp[n]%1234567;
}
n=4;
console.log(solution(n));