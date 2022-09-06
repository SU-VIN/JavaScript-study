function solution(s) {


    if(s.length%2==1){
        return s[(Math.ceil(s.length/2))-1];
    }else{
        let i = s.length/2;
        return s[i-1]+s[i];
    }

}

s="abcdef";
console.log(solution(s));