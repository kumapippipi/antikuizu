// idが"link"の要素を取得する
var link = document.getElementById("link");

// クリックされたらリンクのスタイルを変更する関数
function changeLinkColor() {
    link.classList.add("clicked");
}

// "link"要素がクリックされたら、changeLinkColor関数を実行する
link.onclick = changeLinkColor;
