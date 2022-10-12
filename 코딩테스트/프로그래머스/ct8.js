//기능개발 (미성공)
function solution(progresses, speeds) {
    let array = [];
    for(let i =0; i<progresses.length;i++){
     array.push(Math.ceil(((100-progresses[i])/speeds[i])));
    }

    console.log(array);

    let result = [];
    let count=1;
    for (let i =0; i<array.length-1;i++){
        for(let j =i+1;j<array.length;j++)
        if(array[i]<array[j]){
            result.push(count);
            count=1;
            break;
        }
        else{
            count++;
        }
    }
    

    return result;
}
progresses = [95, 90, 99, 99, 80, 99];
speeds = [1, 1, 1, 1, 1, 1];
console.log(solution(progresses,speeds));