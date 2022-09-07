//부족한 금액 계산하기
function solution(price, money, count) {
    let a = 0;
    for(let i=1;i<=count;i++){
        a+=price*i;
    }
    return a>money?a-money:0;

}
price =3;
money =40;
count =4;

console.log(solution(price,money,count));