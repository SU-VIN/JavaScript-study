function solution(nums) {
    var answer = nums.length/2;
    var num=1;
    nums.sort((a,b)=>a-b);
    for(let i=0;i<nums.length;i++){
        if(nums[i]<nums[i+1]){
            num++;
        }
    }
    return num>answer?answer:num;
}

 //2,2,3,3,3,4
nums = [1,1,1,1,1,1]

console.log(solution(nums))