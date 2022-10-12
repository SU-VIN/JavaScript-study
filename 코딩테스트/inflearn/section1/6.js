//홀수
function solution(arr){
    var sum = 0
    var result = [];
    var min = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            sum+=arr[i]
            min.push(arr[i])
        }

    }
    result.push(sum);
    result.push(Math.min(...min))
    return result

}

arr=[12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));