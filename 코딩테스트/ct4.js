//완주하지 못한 선수
function solution(participant, completion) {
    participant.sort();
    completion.sort();
    for(let i=0;i<participant.length;i++){
        if(participant[i] != completion[i]){
            return participant[i];
        }
    }
}

participant = ["mislav", "stanko", "mislav", "ana"]; //a m m s
completion = ["stanko", "ana", "mislav"]; //a m s
console.debug(solution(participant,completion));
//a b c d 
//a b d 