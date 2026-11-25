// Quando clicar em adicionar.

// 1 - capturar o valor que foi escrito - Feito
// 2 - criar uma nova li com o valor que foi escrito - Feito
// 3 - validar quantidade de tarefas escritas, max 10 - Feito

const taskInput = document.getElementById('task-input');
const buttonAdd = document.getElementById('add-button');
const taskList = document.getElementById('task-list');

const MAX_TASKS = 10;

const trashIcon = `
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path>
    <path d="M10 11v6"></path>
    <path d="M14 11v6"></path>
    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"></path>
  </svg>`;

buttonAdd.addEventListener('click', addTask);

function addTask() {
  const taskValue = taskInput.value.trim();
  const quantTask = taskList.querySelectorAll('li').length;

  if (taskValue === '') {
    taskInput.value = '';
    taskInput.placeholder = 'This field is required';
    taskInput.style.borderColor = 'red';
    return;
  }

  if (quantTask >= MAX_TASKS) {
    alert(`Maximum task is ${MAX_TASKS}.`);
    taskInput.style.borderColor = 'red';
    return;
  }

  const createList = document.createElement('li');
  const createSpan = document.createElement('span');
  const createButton = document.createElement('button');

  createSpan.classList.add('task-text');
  createSpan.textContent = taskValue;

  createButton.classList.add('delete-button');
  createButton.innerHTML = trashIcon;
  createButton.addEventListener('click', () => {
    createList.remove();
  });

  createList.append(createSpan, createButton);
  taskList.append(createList);

  taskInput.style.borderColor = '';
  taskInput.placeholder = '';
  taskInput.value = '';
  taskInput.focus();
}
