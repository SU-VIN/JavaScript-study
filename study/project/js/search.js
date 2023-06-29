(function () {
  const searchInput = document.getElementById("search-input");

  const showSearchResult = () => {
    let searchWord = searchInput.value;
    //   https://www.google.com/search?q=검색어
    //location.href -> 특정 주소로 이동
    window.location.href = `https://www.google.com/search?q=${searchWord}`;
    searchWord = "";
  };

  const enterKey = (event) => {
    if (event.code === "Enter") {
      showSearchResult();
    }
  };

  searchInput.addEventListener("keypress", (event) => {
    enterKey(event);
  });
})();
