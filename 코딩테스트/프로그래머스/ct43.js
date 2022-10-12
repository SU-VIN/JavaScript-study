//튜플
function solution(s) {
    var arr = [];
    var arr2= [];
    s = s.replace("{{","").replace("}}","").split("},{")
    for(let i=0;i<s.length;i++){
        arr.push(s[i].split(",").map(Number));
    }
    arr.sort((a,b)=>a.length-b.length)

    for(let i =0;i<s.length;i++){
        for(let j=0;j<=i;j++){
            if(!arr2.includes(arr[i][j])){
                arr2.push(arr[i][j])
            }
        }

        
    }

    return arr2;
}

s = "{{4,2,3},{3},{2,3,4,1},{2,3}}"
console.log(solution(s))