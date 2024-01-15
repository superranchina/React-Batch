function addTodo() {
    const newToDoInput = document.getElementById('newTodo');
    const todoText = newToDoInput.value.trim();

    if (todoText !== "") {
        const newTodoItem = document.createElement('li');
        newTodoItem.textContent = todoText;

        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.onclick = function() {
            newTodoItem.remove();
        }
        newTodoItem.appendChild(delBtn);

        document.getElementById('todoList').appendChild(newTodoItem);
        newToDoInput.value = '';
    }
}