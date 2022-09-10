//시저암호
function solution(s, n) {
    let alpah = "abcdefghijklmnopqrstuvwxyz"
    var answer = "";
    for(let i=0;i<s.length;i++){
        if(s[i]==' '){
            answer+=' ';
        }
        //소문자일때
        var ck = s[i].tolowercase();
        if(ck===s[i]){
            
        }
    }
    return answer;
}
s = "a B a";
n = 4;
console.log(solution(s,n));