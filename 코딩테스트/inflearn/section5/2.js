//공통원소구하기
function solution(arr1, arr2){
    let result = [];
    for(let i=0;i<arr1.length;i++){
        for(let j=0; j<arr2.length;j++){
            if(arr1[i]==arr2[j]){
                result.push(arr2[j])
            }
        }
    }
    result.sort((a,b)=>a-b)
    return result

}

let a=[1, 3, 9, 5, 2];
let b=[3, 2, 5, 7, 8];
console.log(solution(a, b));
