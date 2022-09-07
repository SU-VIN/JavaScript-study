//나머지가 1이 되는 수 찾기
function solution(n) {
    let num = 1;
    for(let i = 0;i<n;i++){
        if(n%num == 1){
            return num;
        }else{
            num++;
        }
    }
}
n=12;
console.log(solution(n));