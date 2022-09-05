//음양 더하기
function solution(absolutes, signs) {
    let sum = [];
    let result=0;
    for(let i = 0;i<signs.length;i++){
        if(signs[i]){
            sum.push(absolutes[i]);
        }else{
            sum.push(-(absolutes[i]));
        }

        result +=sum[i]
    }

    return result;
}
absolutes = [4,7,12];
signs = [true,false,true];
console.log(solution(absolutes,signs));