//영어 끝말잇기
function solution(n, words) {
    var answer = 0;
    var arr = [words[0]];
    for(let i=0;i<words.length;i++){
        //있을때(즉 중복일때)true
        if(arr.includes(words[i+1])){
           answer=i+2;
           break; 
        }
        //끝말잇기가 아닐때
        if(i<words.length-1&& words[i][words[i].length-1]!==words[i+1][0]){
            answer=i+2;
            break;
        }
        //중복되지않은 단어일때 새로운 배열에 push 
        arr.push(words[i+1]);

    }
    return answer == 0? [0,0]:[answer%n==0?n:answer%n, Math.ceil(answer/n)];
}
n=2;
words = ["hello", "one", "even", "never", "now", "world", "draw"];

console.log(solution(n,words));