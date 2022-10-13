//중복단어제거
function solution(s){  
    s=s.filter((value,i)=>{
        if(s.indexOf(value)===i) return value
    })

    return s
}
let str=["good", "time", "good", "time", "student"];
console.log(solution(str));