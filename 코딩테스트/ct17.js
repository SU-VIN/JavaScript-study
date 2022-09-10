//시저암호
function solution(s, n) {
    let alpah = "abcdefghijklmnopqrstuvwxyz"
    var answer = "";
    for(let i=0;i<s.length;i++){
        if(s[i]==' '){
            answer+=' ';
        }
        for(let j =0;j<alpah.length;j++){
            //소문자일때
            if(s[i]===alpah[j]){
                answer+=alpah[j+n];

            }
            if(s[i].toUpperCase()){
                //대문자일때
                if(s[i]===alpah[j].toUpperCase()){
                    answer+=alpah[j+n].toUpperCase();
                }
            }

        }
    }
    return answer;
}
s = "a B z";
n = 4;
console.log(solution(s,n));