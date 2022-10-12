//서울에서 김서방 찾기
function solution(seoul) {
    let count = 0;
    for(let i=0;i<seoul.length;i++){
        count++;
        if(seoul[i] =="Kim"){
            return `김서방은 ${count-1}에 있다`;
        }
    }


}

seoul = ["Jane", "Kim"];
console.debug(solution(seoul));