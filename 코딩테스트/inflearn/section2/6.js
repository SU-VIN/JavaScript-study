//격자판 최대합
function solution(arr){  
    let answer=0;
    let res1=0;
    let res2=0;
    let res3=0;
    let res4=0;
    for(let i=0;i<arr.length;i++){
        res1=res2=0
        for(let j=0;j<arr.length;j++){
            res1+=arr[i][j]
            res2+=arr[j][i]
        }
        answer = Math.max(res1,res2)
    }

    for(let i=0;i<arr.length;i++){
        res3+=arr[i][i]
        res4+=arr[i][arr.length-i-1]
    }
    answer = Math.max(answer,res3,res4)
    return answer
}

let arr=[[10, 13, 10, 12, 15], 
            [12, 39, 30, 23, 11],
            [11, 25, 50, 53, 15],
            [19, 27, 29, 37, 27],
            [19, 13, 30, 13, 19]];
console.log(solution(arr));
