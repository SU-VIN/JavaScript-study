//자리수의 합
function solution(n, arr){
    let sum=0;
    let result=[];
    let max =0;
    let answer;
    const newArr= arr.map((v)=>{return String(v)})

    for(let i=0;i<newArr.length;i++){
        for(let j=0; j<newArr[i].length;j++){
            sum+=Number(newArr[i][j]);
            
        }
        if(sum>max){
            max=sum;
            answer = newArr[i]
        }
        else if(sum===max){
            if(newArr[i]>answer)answer=newArr[i]
        }
        sum=0;
    }

    return answer;
}

let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
