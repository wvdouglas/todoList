
//Quando clicar em adicionar.

// 1 - capturar o valor que foi escrito - Feito
// 2 - criar uma nova li com o valor que foi escrito - Feito
// 3 - validar quantidade de tarefas escritas, max 10

let valueInput = document.getElementById('task-input').value;
let buttonAdd = document.getElementById('add-button');
let taskList = document.getElementById('task-list');
let captureTaskValue = document.getElementById('task-input').value;

buttonAdd.addEventListener('click', addTask)

function addTask()
    {
        let taskValue = document.getElementById('task-input').value;
        let quantTask = document.querySelectorAll('#task-list li').length
        if(taskValue == "" || null)
            {
                taskValue.innerHTML = "This field is required"
                document.getElementById('task-input').style.borderColor = "red"
            }
            else if(quantTask >= 10)
                {
                alert('Maximum task is 10.')
                document.getElementById('task-input').style.borderColor = "red"
                }
                    else
                        {
                            let createList = document.createElement('li');
                            let createSpan = document.createElement('span')
                            let createButton = document.createElement('button')
                            const trashIcon = `
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path>
                            <path d="M10 11v6"></path>
                            <path d="M14 11v6"></path>
                            <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"></path>
                            </svg>`;
                            taskList.append(createList)
                            createList.append(createSpan)
                            createList.append(createButton)
                            createButton.innerHTML = trashIcon;
                            createButton.classList.add('delete-button');
                            createSpan.classList.add('task-text');
                            createSpan.textContent = taskValue;
                            createButton.addEventListener('click', () => {
                                    createList.remove()
                                })
                            document.getElementById('task-input').style.borderColor = "none"
                        }
    }