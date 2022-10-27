//등수구하기
function solution(arr){  
    let result = [1,1,1,1,1]
    for(let i=0;i<arr.length;i++){
        for(let j =0;j<arr.length;j++){
            if(arr[i]<arr[j]){
                result[i]++
            }
        }
    }
    return result
}

let arr=[87, 87, 92, 100, 76];
console.log(solution(arr));
