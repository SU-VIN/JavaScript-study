//나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
    var answer = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%divisor==0){
            answer.push(arr[i])
        }
    }
    if(answer.length<1){
        answer.push(-1)
    }
    return answer.sort((a,b)=>a-b);
}

arr = [2,3,4]
divisor = 5
console.log(solution(arr,divisor))