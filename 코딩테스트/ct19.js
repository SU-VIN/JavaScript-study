function solution(n)
{
    var answer = 0;
    n = String(n).split("").join("");
    for(let i = 0;i<n.length;i++){
        answer+=Number(n[i]);
    }
    return answer;
}

n=123
console.log(solution(n));