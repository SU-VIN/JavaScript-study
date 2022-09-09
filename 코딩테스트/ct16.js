//약수의 개수와 덧셈
function solution(left, right) {
    let sum=0;
    for(let i = left; i<=right;i++){
        if(Number.isInteger(Math.sqrt(left))){
            sum+=-(left);
            left++;
        }else{
            sum+=left;
            left++;
        }
    }
    return sum;
}
left = 13;
right =17;
console.log(solution(left,right));

// ** 제곱근이 정수면 약수의 개수가 홀수 **