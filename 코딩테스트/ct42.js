//H-index
function solution(citations) {
    var answer = 0;
    citations = citations.sort((a,b)=>b-a)
    while(answer+1<=citations[answer]){
        answer++
    }
    let num =answer
    return num
}


citations = [4,4,4];
console.log(solution(citations))
