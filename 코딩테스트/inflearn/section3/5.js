//문자열 압축
function solution(s){
    let result = ""
    let count=1;
    for(let i=0;i<s.length;i++){
        if(s[i]===s[i+1]){
            count++;
        }else{
            result+=s[i]
            if(count!==1) result+=count;
            count=1;
        }

    }
    return result;
}

let str="KKHSSSSSSSE";
console.log(solution(str));
