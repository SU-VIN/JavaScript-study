//카펫
function solution(brown, yellow) {
    var answer = [];
    var sum = brown+yellow;
    //카펫의 최소길이는 3임
    for(let height=3; height<=brown; height++){
        if(sum%height==0){
            let weight = sum/height;
            //(가로-2)*(높이-2) = 노랑칸 개수 
            if((weight-2)*(height-2)==yellow){
                return [weight,height]
            }
        }
    }
}


brown =10;
yellow =2;

console.log(solution(brown,yellow));