const input = document.createElement("input");
input.setAttribute("data-test", "todo-input");
input.setAttribute("id", "input-field");
document.body.appendChild(input);

const button = document.createElement("button");
button.setAttribute("data-test", "todo-add");
button.setAttribute("id", "click-btn");
document.body.appendChild(button);

const addTodoElem = () => {
  const data = input.value;
  axios
    .post("https://jsonplaceholder.typicode.com/posts", {
      body: data,
      title: "addTodoElem",
    })
    .then((response) => {
      console.log(response);
    });
};
button.addEventListener("click", addTodoElem);
