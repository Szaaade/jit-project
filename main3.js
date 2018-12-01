let addButton = document.querySelector('button');
addButton.addEventListener('click', onAddToDoClicked);

let num = 0;
function onAddToDoClicked() {
    const inputValue = document.getElementById('input').value;
    console.log(inputValue);
    const newTreeNode = document.createElement('p');
    let className = `task_name_${num}`;
    num++;
    newTreeNode.innerText = inputValue;
    newTreeNode.className = className;
    const todoContainer = document.querySelector('.todolist');
    todoContainer.appendChild(newTreeNode);
    let newTask = document.querySelector(`.${className}`);
    newTask.addEventListener('click', function () {
        todoContainer.removeChild(newTask);
        const doneContainer = document.querySelector('.done');
        doneContainer.append(newTreeNode);

    });
}
