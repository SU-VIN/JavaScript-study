//콜라츠 추측
function solution(num) {
    var answer = 0;
    while(answer<=500){
        if(num===1)return answer
        if(num%2==0){
            num=num/2
            answer++
        }
        else {
            num=num*3+1
            answer++
        }
    }

return -1

}

num = 6;
console.log(solution(num))