//숫자만 추출
function solution(str){
    //isNaN() 숫자인지 판별하는 내장함수
    str=str.replace(/[^0-9]/g,"")
    str=String(Number(str))
    return str
}

let str="g0en2T0s8eSoft";
console.log(solution(str));
