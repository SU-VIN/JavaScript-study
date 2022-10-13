//문자 찾기
function solution(s, t){
    let count =0
    for(let i of s){
        if(i===t){
            count++;
        }
    }
    return count;
}

let str="COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));