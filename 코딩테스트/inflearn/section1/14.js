//가장 긴 문자열
function solution(s){  
    let answer
    for(let i=0;i<s.length;i++){
        for(let j=i+1;j<s.length;j++){
        if(s[i].length>s[j].length){
            answer=s[i]
        }else{
            answer=s[j]
        }
    }
    }
    return answer
}
let str=["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
