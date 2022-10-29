//가장 짧은 문자거리
function solution(s, t){
    let start = 1000;
    let arr=[];
    for(let i=0;i<s.length;i++){
        if(s[i]===t){
            start=0;
            arr.push(start)
        }else{
            arr.push(start);
        }
        start++
    }

    for(let i=s.length-1;i>=0;i--){
        if(s[i]===t){
            start=0;
        }else{
            if(start<arr[i]) arr[i]=start
        }
        start++
        
    }

    return arr;
}

let str="teachermode";
console.log(solution(str, 'e'));

