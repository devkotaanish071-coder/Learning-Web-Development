const todoList = [{name: 'make dinner',
    duedate: '2026-10-20'},
    {name: 'cook food',
    duedate: '2025-09-05'}];

rendertodo();
function rendertodo(){

    let todoHTML = '';

    todoList.forEach((todoObject, index) => {
        const {name, duedate} = todoObject;
        const html = `
        <div>${name}</div>
        <div>${duedate}</div>
        <button onclick = "todoList.splice(${index},1); rendertodo();" class = "todo-delete">Delete</button>`
        todoHTML += html;
    });

    /*
    for(let i = 0; i < todoList.length; i++){
        const todoObject = todoList[i];
        const {name, duedate} = todoObject;
        // const {date} = todoObject;
        // const name = todoObject.name;
        // const date = todoObject.duedate;
        const html = `
        <div>${name}</div>
        <div>${duedate}</div>
        <button onclick = "todoList.splice(${i},1); rendertodo();" class = "todo-delete">Delete</button>`
        todoHTML += html;
    }
    */

    document.querySelector('.todo-js').innerHTML = todoHTML;
}

function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector(`.js-due-date`);
    const duedate = dateInputElement.value;

    todoList.push({
        name, duedate
    });
    // console.log(todoList);
    inputElement.value = '';
    rendertodo();
}