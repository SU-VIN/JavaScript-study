//보이는 학생
function solution(arr){    
    let count = 0;     
    for(let i=0;i<arr.length;i++){
        if(arr[i]<arr[i+1]){
            count++
        }
    }
    return count
}

let arr=[130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
