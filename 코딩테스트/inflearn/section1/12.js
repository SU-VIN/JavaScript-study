//대문자로 통일
function solution(s){      
    let answer = ""   
    for(let x of s){
        if(x!==x.toUpperCase()){
            answer+=x.toUpperCase()
        }else{
            answer+=x
        }
    }
    return answer

}

let str="ItisTimeToStudy";
console.log(solution(str));