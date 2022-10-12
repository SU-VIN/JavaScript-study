//최댓값과 최솟값
function solution(s) {
    var answer = "";
    s = s.split(" ");
    answer = Math.min(...s)+" "+Math.max(...s)
    return answer;
}
s = "-4 -2 -3 -1";
console.log(solution(s));
