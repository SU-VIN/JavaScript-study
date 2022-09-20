//JadenCase 문자열 만들기
function solution(s) {
    var answer = ""
    answer=s.split(" ").map(str=>str.charAt(0).toUpperCase()+str.slice(1).toLowerCase()).join(" ");
    return answer;
}
s="3people unFollowed me";
console.log(solution(s));
