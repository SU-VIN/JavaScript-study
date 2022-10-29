//유효한 팰린드룸
function solution(s){
    //정규식 사용 (/[^a-z]/g,"") 글로벌 영역에서 소문자가 아닌걸 찾아서 빈문자열로 바꿔라 (^가 부정을 뜻함)
    s=s.toLowerCase().replace(/[^a-z]/g,"")
    return s.split('').reverse().join('')===s?"YES":"NO"
}

let str="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
