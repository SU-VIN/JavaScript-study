//뒤집은 소수
function solution(arr){
    let result = []
    arr=arr.map((v)=>(String(v).split("").reverse().join("")))
    arr=arr.map((v)=>Number(v))
    for(let i=0;i<arr.length;i++){
        if(isPrime(arr[i])){
            result.push(arr[i])
        }
    }
    return result
}

function isPrime(num){
    if(num===1) return false;
    for(let i=2;i<Math.sqrt(num);i++){
        if(num%i===0)return false;
    }
    return true;
}

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
