//같은 숫자는 싫어
function solution(arr)
{
	return arr.filter((num, index) => num!=arr[index+1]);
}

const arrnum = [1,1,2,2,3,4,4,1,5,5]

console.log(solution(arrnum))