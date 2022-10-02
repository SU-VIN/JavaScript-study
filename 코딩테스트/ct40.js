//짝지어 제거하기
function solution(s)
{
    var arr = [];
    for(let i=0;i<s.length;i+=1){
       if(arr[arr.length-1]===s[i]){
           arr.pop()
       }else{
           arr.push(s[i])
       }
    }
    return arr.length ===0 ?1:0
}
s ="baabaa"

console.log(solution(s));