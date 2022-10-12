function solution(s) {
    const arr=s.split(" ")
    var answer =0
    while(arr.includes("Z")){
        arr.splice(arr.indexOf("Z")-1,2)
    }
    for(let i=0;i<arr.length;i++){
        answer+=Number(arr[i])
    }
    return answer
}

s ="10 Z 20 Z 1"
console.log(solution(s))