const onClickAdd = () => {
    const inputText = document.getElementById('add-text').value;
    if (inputText === '') {
        alert('TODOを入力してください');
        return;
    }
    document.getElementById('add-text').value = '';
    createIncompleteTodo(inputText);
}

const createIncompleteTodo = (todoText) => {
    const li =document.createElement('li');
    const div = document.createElement('div');
    const p = document.createElement('p');

    const completeButton = document.createElement('button');
    completeButton.textContent = '完了';
    completeButton.addEventListener('click', () => {
        const moveTarget = completeButton.closest('li');
        completeButton.nextElementSibling.remove();
        completeButton.remove();
        const backButton = document.createElement("button");
        backButton.textContent = '戻す';
        backButton.addEventListener('click', () => {
            const todoText = backButton.closest('div').firstElementChild.textContent;
            backButton.closest('li').remove();
            createIncompleteTodo(todoText);
        });
        moveTarget.firstElementChild.appendChild(backButton);
        document.getElementById('complete-list').appendChild(moveTarget);
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '削除';
    deleteButton.addEventListener('click', () => {
        const deleteTarget = deleteButton.closest('li');
        document.getElementById('incomplete-list').removeChild(deleteTarget);
    });

    div.classList.add('list-row');
    p.className = 'todo-item';
    p.textContent = todoText;
    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    li.appendChild(div);
    document.getElementById('incomplete-list').appendChild(li);

}

document.getElementById('add-button').addEventListener('click', () => onClickAdd());
