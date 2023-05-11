import { Tasks } from './task_class.js';

const tasks = new Tasks();

function addTaskSubmit() {
  const addTaskInput = document.getElementById('add_new_task');
  addTaskInput.addEventListener('submit', (event) => {
    event.preventDefault();
    const description = document.getElementById('description').value;
    tasks.addTask(description);
    tasks.displayTasks();
    addTaskInput.reset();
  });
}
const removeTaskClick = () => {
  const taskList = document.getElementById('tasks_list');
  taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('button_remove')) {
      const { id } = event.target.dataset;
      tasks.removeTask(id);
      tasks.displayTasks();
    }
  });
};

export { addTaskSubmit, removeTaskClick };
