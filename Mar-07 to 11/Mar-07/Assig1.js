const todoArr = [];
const render = function () {
  const parent_container = document.getElementById("list_container");
  parent_container.innerText = "";
  for (i = 0; i < todoArr.length; i += 1) {
    const single_todo_item = todoArr[i];
    const new_list = document.createElement("li");
    new_list.innerText = single_todo_item;
    parent_container.appendChild(new_list);
  }
};

const add_item = function () {
  const ip = document.getElementById("inp");
  const new_todo = ip.value;
  todoArr.push(new_todo);
  ip.value = "";
  render();
};

const btn = document.getElementById("input_btn");
btn.addEventListener("click", add_item);
