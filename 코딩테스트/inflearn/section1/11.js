//대문자 찾기
function solution(s){         
    let count =0
    for(let x of s){
        if(x===x.toUpperCase()){
            count++
        }
    }
    return count
}

let str="KoreaTimeGooD";
console.log(solution(str));