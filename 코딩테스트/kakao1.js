function solution(today, terms, privacies) {
    var answer = [];
    var arr1=[];
    var arr2= [];
    let date = new Date(today);
    date.setDate(date.getDate()+1);

    for(let i=0;i<terms.length;i++){
        arr2.push(terms[i].split(" "));
    }

    for(let i=0;i<privacies.length;i++){
        arr1.push(privacies[i].split(" "));
    }

    for(let i=0;i<privacies.length;i++){
        for(let j=0;j<terms.length;j++){
            if(arr1[i][1]===arr2[j][0]){
                var piDay = new Date(arr1[i][0]);
                piDay.setMonth(piDay.getMonth()+Number(arr2[j][1]));
                if(piDay<date){
                    answer.push(i+1);
                }
            }
        }


    }

    return answer;
}
today = "2022.05.19";
terms = ["A 6","B 12","C 3"];
privacies =["2021.05.02 A","2021.07.01 B",
            "2022.02.19 C","2022.02.20 C"];
console.log(solution(today,terms,privacies));