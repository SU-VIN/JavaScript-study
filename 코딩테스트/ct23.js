//올바른 괄호
function solution(s){
    let count =0;
    for(let i =0;i<s.length;i++){
        count+=s[i]==="("?1:-1;
        if(count<0)return false;   //)가 먼저오면 무조건 실패     
    }
    return count === 0 ?true:false;

}
s = "()()";
s1=")()(";

console.log(solution(s1));