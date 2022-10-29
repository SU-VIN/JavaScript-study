function solution(ingredient) {
    var answer = 0; 
    for(let i=0;i<ingredient.length;i++){
        if(ingredient.slice(i,i+4).join("")==='1231'){
            answer++
            ingredient.splice(i,4)
            i-=3
        }
    }
    return answer;
}
//1빵 2야채 3고기  1231
let ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1]
console.log(solution(ingredient))