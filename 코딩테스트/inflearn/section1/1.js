//세 수 중 최솟값
function solution(a, b, c){

    if(a<b){
        if(a<c){
            return a;
        }else{
            return c
        }
    }else{
        if(b<c){
            return b;
        }else{
            return c
        }

    }
}

console.log(solution(2, 5, 1));