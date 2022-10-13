//일곱난쟁이
function solution(arr){
    const sum = arr.reduce((a,c)=>a+c)

    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(sum-(arr[i]+arr[j])==100){
                //i먼저 지울시 j가 앞으로 땡겨져와 내가 생각한 j가 다른 값이 되기때문에 뒷값 
                //먼저 지워
                arr.splice(j,1)
                arr.splice(i,1)
            }
        }
    }
    return arr
}

let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));