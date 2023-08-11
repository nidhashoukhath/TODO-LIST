const addButton = document.querySelector("#add-button");
const todoItem = document.querySelector("#todo-item");
const todoList = document.querySelector("#todo-list");
const clearButton = document.querySelector("#clear-button");
const tasksToday = document.querySelector('#tasks-today'); 
const date = document.querySelector("#date");

let todoItems = [];
                                                              
const name = localStorage.getItem("name")??readName(); //if null readName()
document.querySelector("#name").innerHTML = name; 

addButton.addEventListener("click", addTodo);
clearButton.addEventListener("click", clearAll);
date.innerHTML = new Date().toLocaleDateString();

function addTodo() {
    if(todoItem.value===""){
        alert("Please enter a value");
    }
    else{
        todoItems.push(todoItem.value);
        todoItem.value = "";
        renderTodo();
    }
}

function removeTodo(index){
    todoItems.splice(index, 1);
    renderTodo();
}

function clearAll(){
    if(confirm("Are you sure?")){
        todoItems = [];
        renderTodo();
    }
}

function renderTodo(){
    todoList.innerHTML = "";
    for(let i=0;i<todoItems.length;i++){
        todoList.innerHTML += `<div class="item"><span>${todoItems[i]}</span><button class="green" onclick="removeTodo(${i})">x</button></div>`;    
    }
    displayNumberOfTasks();
}

function displayNumberOfTasks(){
    tasksToday.innerHTML = "";
    for(let i=0;i<todoItems.length;i++){
        if(i==0){
            tasksToday.innerHTML = `<h3 class="poppins">You have got 1 task to finish today</h3>`;
        }
        else{
            tasksToday.innerHTML = `<h4 class="poppins">You have got ${i+1} tasks to finish today</h4>`;
        }
    }
}

function readName(){
    const name = prompt("Enter your name");
    localStorage.setItem("name", name); 
    return name;   
}