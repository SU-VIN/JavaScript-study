//점수 계산
function solution(arr){     
    let sum=0; 
    let score=1;   
    for(let i =0;i<arr.length;i++){
        if(arr[i]==0){
            score =0;
        }
        sum+=score;
        score++;
    }
    return sum;
}

let arr=[1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
