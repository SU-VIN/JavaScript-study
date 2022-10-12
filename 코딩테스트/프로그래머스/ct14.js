//없는 숫자 더하기
function solution(numbers) {
    const arr = [0,1,2,3,4,5,6,7,8,9];
    let a = arr.filter(x=>!numbers.includes(x));
    let sum =0;
    for(let i =0;i<a.length;i++){

        sum+=a[i];
    }
    return sum;
}
numbers = [1,2,3,4,6,7,8,0];
console.log(solution(numbers));