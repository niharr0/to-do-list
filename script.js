const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');


function addTodoItem(todoText) {
    const todoItem = document.createElement('li');
    todoItem.innerText = todoText;

    
    todoItem.addEventListener('click', function() {
        todoItem.classList.toggle('completed');
    });

  
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.className = 'delete-btn';
    deleteButton.addEventListener('click', function() {
        todoItem.remove();
    });

    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);
}


form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const todoText = input.value.trim();

    if (todoText !== '') {
        addTodoItem(todoText);
        input.value = ''; 
    }
});
