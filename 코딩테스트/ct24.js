//문자열 내 p와 y의 개수
function solution(s){
    s=s.toUpperCase();
    var count1=0;
    var count2=0;
    for(let i =0;i<s.length;i++){
        if(s[i]=="P"){
            count1++;
        }
        else if(s[i]=="Y"){
            count2++;
        }
    }
    return count1===count2?true:false;

}
s= "pPoooyY";

console.log(solution(s));