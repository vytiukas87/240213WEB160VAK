let addTaskButton = document.getElementById('add-task');
let taskInputField = document.getElementById('task-input');
let taskList = document.getElementById('tasks');


addTaskButton.addEventListener('click', function(event) {

    event.preventDefault();

    let newLiElement = document.createElement('li');
    newLiElement.innerText = taskInputField.value;

    taskList.prepend(newLiElement);

    taskInputField.value = '';
});