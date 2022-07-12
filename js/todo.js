const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

const saveToDos = function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

const deletoToDo = function deletoToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
    saveToDos();
}
const paintToDo = function paintToDo(newTodo){
    const list = document.createElement("li");
    list.id = newTodo.id;
    const button = document.createElement("button");
    button.innerText = "❌";
    const sapn = document.createElement("span");
    sapn.innerText = newTodo.text;
    button.addEventListener("click",deletoToDo);
    list.appendChild(button);
    list.appendChild(sapn);
    toDoList.appendChild(list);
}

const handleToDosubmit = function handleToDosubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}
toDoForm.addEventListener("submit",handleToDosubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos){
    // paint list
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(element => {
        paintToDo(element)
    });
}

