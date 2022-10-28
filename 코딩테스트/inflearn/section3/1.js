//회문문자열
function solution(s){
    let count =0;
        for(let i=0;i<Math.floor(s.length/2);i++){
            console.log(s[i].toUpperCase())
            console.log(s[s.length-i-1].toUpperCase())
            if(s[i].toUpperCase()==s[s.length-i-1].toUpperCase()){
                count++
            }
        }

    return count==Math.floor(s.length/2)?"YES":"NO"

}

let str="gooG";
console.log(solution(str));



