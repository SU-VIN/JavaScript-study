//가위바위보
function solution(a, b){         
//가위 1 바위 2 보 3
    for(let i =0;i<a.length;i++){
        if(a[i]==1&&b[i]==3){
            console.log("A")
        }
        else if(a[i]==2&&b[i]==1){
            console.log("A")
        }
        else if(a[i]==3&&b[i]==2){
            console.log("A")
        }
        else if(a[i]===b[i]){
            console.log("D")
        }
        else{
            console.log("B")
        }
    }

}

let a=[2, 3, 3, 1, 3];
let b=[1, 1, 2, 2, 3];
console.log(solution(a, b));
