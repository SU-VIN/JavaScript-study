//피보나치 수
function solution(n) {
    var dp = [0,1];
    for(let i=2;i<=n;i++){
        dp[i]=(dp[i-1]+dp[i-2])%1234567;
    }
    return dp[n];
}

n=3
console.log(solution(n));