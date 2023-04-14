const _editor = document.querySelector("#editor-html");
const run = document.getElementById("run");
const screen = document.querySelector("#result");
const preCode = document.querySelector("#code");

let editor = ace.edit(_editor);
editor.getSession().setMode("ace/mode/javascript");
editor.setTheme("ace/theme/cobalt");

// Enable autocompletion
editor.setOptions({
  enableBasicAutocompletion: true,
  enableSnippets: true,
  enableLiveAutocompletion: true,
});

localStorage.setItem("CODE", editor.getValue());
localStorage.setItem(
  "default",
  `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
</head>
<body>
<h1>hello world</h1>
</body>
</html>`
);

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === "Enter") {
    screen.srcdoc = localStorage.getItem("CODE");
  }
});

let copy = document.querySelector(".copy_btn");
function changText() {
  copy.innerHTML = `<i class="ico fa-regular fa-clipboard"></i><span>Copy</span>`;
}

copy.addEventListener("click", (e) => {
  let data = editor.getValue();
  navigator.clipboard.writeText(data);
  copy.innerHTML = `<i class="ico fa-solid fa-check"></i> <span>Copied!</span>`;
  setTimeout(changText, 3000);
});

function show() {
  if (localStorage.CODE.length > 5) {
    preCode.textContent = localStorage.getItem("CODE");
    screen.srcdoc = editor.getValue();
  } else {
    preCode.textContent = localStorage.getItem("default");
    screen.srcdoc = editor.getValue();
  }
}

setTimeout(console.clear, 2500);
