//삼각형 판별하기
function solution(a, b, c){
    if(a>b){
        if(a>c){
            return a<b+c?"YES":"NO"
        }else{
            return c<b+a?"YES":"NO"
        }
    }else{
        if(b>c){
            return b<a+c?"YES":"NO"
        }else{
            return c<b+a?"YES":"NO"
        }
    } 
}

console.log(solution(6, 7, 11));