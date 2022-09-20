//JadenCase 문자열 만들기
//문제는 맞았지만 효율성이랑 런타임 에러 오지게남
function solution(s) {
    var answer = ""
    s=s.split(" ");
    for(let i=0;i<s.length;i++){
        answer+= s[i][0].toUpperCase()+s[i].slice(1).toLowerCase()+(" ");;
    }
    return answer.trim();
}
s="3people unFollowed me";
console.log(solution(s));
