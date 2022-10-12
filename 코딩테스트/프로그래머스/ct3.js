//k번째수
function solution(array, commands) {


    var draw=[];
    for(let i=0;i<commands.length;i++){
        const slice = array.slice(commands[i][0]-1,commands[i][1]).sort();
        draw.push(slice.slice(commands[i][2]-1,commands[i][2]));

    }

    const join = draw.reduce(function (draw, cur) {
        return draw.concat(cur);
      });
     return join;
}
array=[1,5,2,6,3,7,4];
commands=[[2,5,3],[4,4,1]];
console.log(solution(array,commands));

