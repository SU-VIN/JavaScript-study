//숫자 문자열과 영단어
function solution(s) {
    const num = ["zero","one","two","three","four","five","six","seven","eight","nine"];

    for (let i = 0; i<num.length; i++){
        s=s.split(num[i]).join(i);
        
    }
    return parseInt(s);

  }

  s = "23four5six7";
  console.log(solution(s));