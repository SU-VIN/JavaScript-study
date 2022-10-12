//소수찾기(답은 맞으나 시간초과)
function solution(n) {
    var answer = 0;
    var count = 0;

    for(let i=2;i<=n;i++){
        for(let j=1;j<=i;j++){
            if(i%j==0){
                answer++
            }
        }
        if(answer==2){
            count++
        }
        answer=0
    }

    return count;
}

n=5
console.log(solution(n))