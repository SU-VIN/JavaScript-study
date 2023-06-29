(function () {
  const API_URL =
    "https://port-0-random-quote-4uvg2mleme84ru.sel3.cloudtype.app/";

  const quoteElement = document.getElementById("quote");
  const quoteItem = localStorage.getItem("quote");

  const nowDate = new Date();
  const month = nowDate.getMonth() + 1;
  const date = nowDate.getDate();

  const getQuote = async () => {
    //api호출해 명언 데이터 가져오기
    try {
      const data = await fetch(API_URL).then((res) => res.json());
      const result = data[1].respond;
      setQuote(result);
    } catch (error) {
      console.log(error);
      setQuote("가는말이 고와야 오는말이 곱다 - 임수빈");
    }
  };

  const setQuote = (result) => {
    let quote = { createDate: `${month}-${date}`, quoteData: result };
    localStorage.setItem("quote", JSON.stringify(quote));
    quoteElement.textContent = `${result}`;
  };

  //명언이 존재할 때
  if (quoteItem) {
    //구조분해할당
    let { createDate, quoteData } = JSON.parse(quoteItem);
    if (createDate === `${month}-${date}`) {
      quoteElement.textContent = `${quoteData}`;
    } else {
      getQuote();
    }
  } else {
    getQuote();
  }
})();
