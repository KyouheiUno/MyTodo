const form = document.getElementById("todoForm")
const input = document.getElementById("todoInput")

//入力した値をコンソールに出力させる
form.addEventListener("submit", function(event) {
  event.preventDefault(); //送信時の画面リロードをなくす
  console.log(input.value);
})