import { Tasks } from './task_class.js';

const tasks = new Tasks();

function addTaskSubmit() {
  const enterTask = document.querySelector('.enter_task');
  const inputField = document.getElementById('description');

  const addTask = () => {
    tasks.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const description = inputField.value;
    tasks.addTask(description);
    tasks.displayTasks();
    document.getElementById('add_new_task').reset();
  };

  inputField.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      addTask();
    }
  });

  enterTask.addEventListener('click', (event) => {
    event.preventDefault();
    addTask();
  });
}

const clearCompletedTasks = () => {
  tasks.tasks = tasks.tasks.filter((task) => !task.completed);
  tasks.updateTaskIds();
  localStorage.setItem('tasks', JSON.stringify(tasks.tasks));
  tasks.displayTasks();
};

const removeTaskClick = () => {
  const taskList = document.getElementById('tasks_list');
  taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('button_remove')) {
      const { id } = event.target.dataset;
      tasks.removeTask(id);
      tasks.displayTasks();
    }
  });

  const clearButton = document.getElementById('clear_button');
  clearButton.addEventListener('click', () => {
    clearCompletedTasks();
  });
};

export { addTaskSubmit, removeTaskClick };