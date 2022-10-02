//예상 대진표
function solution(n,a,b)
{
    var answer = 1;
    const nextRound = (num)=> Math.floor((num+1)/2)
    while(a!=b){
        if(nextRound(a)===nextRound(b)) break;
        a=nextRound(a);
        b=nextRound(b);
        answer++;
    }

    return answer;
}




n = 8
a = 4
b = 7

console.log(solution(n,a,b))