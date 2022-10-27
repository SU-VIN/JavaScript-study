//봉우리
function solution(arr){  
    let count =0;
    //12 3 6 9 방향
    let dx =[-1,0,1,0]
    let dy =[0,1,0,-1]
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            let flag= 1
            for(let k=0;k<dx.length;k++){
                let nx=i+dx[k]
                let ny=j+dy[k]
                if(nx>=0&&nx<arr.length&&ny>=0&&ny<arr.length&&arr[nx][ny]>=arr[i][j]){
                    flag=0
                    break
                }
            }
            if(flag) count++
        }
    }
    return count
}

let arr=[[5, 3, 7, 2, 3], 
            [3, 7, 1, 6, 1],
            [7, 2, 5, 3, 4],
            [4, 3, 6, 4, 1],
            [8, 7, 3, 5, 2]];
console.log(solution(arr));
