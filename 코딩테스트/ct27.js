//핸드폰 번호 가리기
function solution(pn) {
    return "*".repeat(pn.length-4)+pn.slice(-4);
}
 
pn = "01033334444";

console.log(solution(pn));