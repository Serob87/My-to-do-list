// Создаем кнопку "close" и добавляем ее к каждому элементу списка

let myNodelist = document.getElementsByTagName("li");

for (let i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Нажмите кнопку закрытия, чтобы скрыть текущий элемент списка
let close = document.getElementsByClassName("close");

for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
}

// Добавить символ "checked" при нажатии на элемент списка
let list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

// Создать новый элемент списка при нажатии на кнопку "Add"

function newEl() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("input").value;
  let createTxt = document.createTextNode(inputValue);
  li.appendChild(createTxt);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("todoList").appendChild(li);
  }
  document.getElementById("input").value = "";
  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
}
document.getElementById("addButton").addEventListener("click", newEl);
