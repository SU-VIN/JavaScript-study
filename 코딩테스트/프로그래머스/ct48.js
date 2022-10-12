//다음에 올 숫자
function solution(common) {
    var answer = 0;
    if(common[common.length-1]%common[common.length-2]==0){
        answer = common[common.length-1]*(common[common.length-1]/common[common.length-2])
    }else{
        answer = common[common.length-1]+(common[common.length-1]-common[common.length-2])
    }
    return answer
}
common = [1, 2, 3, 4]
console.log(solution(common))