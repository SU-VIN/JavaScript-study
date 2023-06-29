(function () {
  const newBookmarkForm = document.getElementById("bookmark-item-input-form");
  const bookmarkItemList = document.getElementById("bookmark-list");

  let bookmarkList = [];
  if (localStorage.getItem("bookmarkList")) {
    bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"));
  } else {
    localStorage.setItem("bookmarkList", JSON.stringify(bookmarkList));
  }

  //로컬스토리지에 북마크 저장
  const addBookmarkItem = () => {
    bookmarkList = [];
    if (localStorage.getItem("bookmarkList")) {
      bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"));
    }

    let name = document.getElementById("new-bookmark-name-input").value;
    let url = document.getElementById("new-bookmark-url-input").value;
    let createAt = Date.now(); //지금까지의 밀리초

    bookmarkList.push({ name: name, url: url, createAt: createAt });
    localStorage.setItem("bookmarkList", JSON.stringify(bookmarkList));

    document.getElementById("new-bookmark-name-input").value = "";
    document.getElementById("new-bookmark-url-input").value = "";
    newBookmarkToggle();
    setBookmarkItem({ name: name, url: url, createAt: createAt });
  };

  let isAddBtnClick = false;
  newBookmarkForm.style.display = "none";

  const newBookmarkToggle = () => {
    isAddBtnClick = !isAddBtnClick;
    isAddBtnClick
      ? (newBookmarkForm.style.display = "block")
      : (newBookmarkForm.style.display = "none");
  };

  //고유값인 createAt 이 id
  const delectBookmarkItem = (id) => {
    const isDelete = window.confirm("정말 삭제하시겠습니까?");

    if (isDelete) {
      let bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"));
      let nowBookmarkList = bookmarkList.filter((e) => e.createAt != id);
      localStorage.setItem("bookmarkList", JSON.stringify(nowBookmarkList));
      //보여지는 부분에서도 삭제
      document.getElementById(`bookmark-item-${id}`).remove();
    }
  };

  //로컬스토리지에 저장되어있는 북마크 리스트들을 보이게 하기
  const setBookmarkItem = (item) => {
    const bookmarkItem = document.createElement("div"); //div로 이루어진 요소를 생성해줌
    bookmarkItem.classList.add("bookmark-item"); //생성한 요소의 클래스네임 설정
    bookmarkItem.id = `bookmark-item-${item.createAt}`;
    // ------------------------------------------------------------북마크아이템의자식
    const bookmarkInfo = document.createElement("div");
    bookmarkInfo.classList.add("bookmark-info");
    // --------------------------------------------북마크인포의자식
    const bookmarkUrl = document.createElement("a");
    bookmarkUrl.classList.add("bookmark-url");
    bookmarkUrl.href = item.url;

    const urlIcon = document.createElement("div");
    urlIcon.classList.add("url-icon");

    const urlIconImg = document.createElement("img");
    urlIconImg.src = `https://www.google.com/s2/favicons?domain_url=${item.url}`;

    const nameElement = document.createElement("div");
    nameElement.classList.add("name");
    nameElement.textContent = item.name;
    // ------------------------------------------------------------북마크아이템의자식
    const bookmarkDelBtn = document.createElement("div");
    bookmarkDelBtn.textContent = "삭제";
    bookmarkDelBtn.classList.add("del-btn");
    bookmarkDelBtn.addEventListener("click", () => {
      delectBookmarkItem(item.createAt);
    });

    //아이템의 자식
    bookmarkItem.appendChild(bookmarkInfo);
    bookmarkItem.appendChild(bookmarkDelBtn);
    //info의 자식
    bookmarkInfo.appendChild(bookmarkUrl);
    //url의 자식
    bookmarkUrl.appendChild(urlIcon);
    bookmarkUrl.appendChild(nameElement);
    //urlIcon의 자식
    urlIcon.appendChild(urlIconImg);

    bookmarkItemList.appendChild(bookmarkItem);
  };

  const setBookmarkList = () => {
    bookmarkList.forEach((item) => {
      setBookmarkItem(item);
    });
  };

  document
    .getElementById("bookmark-item-add-btn")
    .addEventListener("click", newBookmarkToggle);

  document.getElementById("add-btn").addEventListener("click", addBookmarkItem);
  document
    .getElementById("cancel-btn")
    .addEventListener("click", newBookmarkToggle);

  setBookmarkList();
})();
