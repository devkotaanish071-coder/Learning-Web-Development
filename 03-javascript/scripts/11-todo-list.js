const todoList = ['make dinner', 'cook food'];

for(let i = 0; i < todoList.length; i++){
    console.log(todoList[i]);
}

function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    todoList.push(name);
    console.log(todoList);
    inputElement.value = '';
}