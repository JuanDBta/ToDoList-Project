import { Tasks } from './task_class.js';

const tasks = new Tasks();

function addTaskSubmit() {
  const enterTask = document.querySelector('.enter_task');
  const inputField = document.getElementById('description');
  inputField.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const description = inputField.value;
      tasks.addTask(description);
      tasks.displayTasks();
      document.getElementById('add_new_task').reset();
    }
  });
  enterTask.addEventListener('click', (event) => {
    event.preventDefault();
    const description = document.getElementById('description').value;
    tasks.addTask(description);
    tasks.displayTasks();
    document.getElementById('add_new_task').reset();
  });
}

const removeTaskClick = () => {
  const taskList = document.getElementById('tasks_list');
  taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('button_remove')) {
      const { id } = event.target.dataset.id;
      tasks.removeTask(id);
      tasks.displayTasks();
    }
  });
};

export { addTaskSubmit, removeTaskClick };