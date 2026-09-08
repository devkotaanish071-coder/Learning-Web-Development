const todoList = ['make dinner','cook food'];

rendertodo();
function rendertodo(){

    let todoHTML = '';

    for(let i = 0; i < todoList.length; i++){
        const todo = todoList[i];
        const html = `<p>${todo}</p>`
        todoHTML += html;
    }

    document.querySelector('.todo-js').innerHTML = todoHTML;
}

function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    todoList.push(name);
    console.log(todoList);
    inputElement.value = '';
    rendertodo();
}