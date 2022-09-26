//구명보트
function solution(people, limit) {
    var count =0;
    people= people.sort((a,b)=>b-a);
    
    for(let i=0, j=people.length-1;i<=j;i++){
        if(people[i]+people[j]<=limit){
            j--;
        }
       count++;
    }

    return count;
}

people = [70,50,80,50];
limit =100;

console.log(solution(people,limit))