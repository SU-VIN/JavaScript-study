//카펫
function solution(brown, yellow) {
    var answer = [];
    var sum = brown+yellow;

    for(let height=3; height<=brown; height++){
        if(sum%height==0){
            let weight = sum/height;

            if((weight-2)*(height-2)==yellow){
                return [weight,height]
            }
        }
    }
}


brown =10;
yellow =2;

console.log(solution(brown,yellow));