//두 개 뽑아서 더하기
function solution(numbers) {
    var result = [];
    numbers.sort((a,b)=>a-b);
    console.log(numbers);
    for (let i =0; i<numbers.length-1;i++){
        for(let j =numbers.length-1;j>i;j--)
        result.push(numbers[i]+numbers[j]);

    }
    result.sort((a,b)=>a-b);

    return result.filter((num,index)=>num!=result[index+1]);

}

var numbers = [5,0,2,7];
console.log(solution(numbers));