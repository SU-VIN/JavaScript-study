function solution(cap, n, deliveries, pickups) {
    var answer = 1;
    var arr= [];
    for(let i =0;i<n;i++){
        arr.push(deliveries[i]-pickups[i]);
    }

    return arr;
}

cap = 4;
n=5;
deliveries = [1,0,3,1,2];
pickups = [0,3,0,4,0];

console.log(solution(cap,n,deliveries,pickups));