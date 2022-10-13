//10부제
function solution(day, arr){
    let count =0;
    let arr2 = []
    for(let i=0;i<arr.length;i++){
        arr2.push(String(arr[i]))
        if(arr2[i][1]==day){
            count++;
        }
    }
    return count
}

arr=[12,20,54,30,87,91,30];
console.log(solution(0, arr));
