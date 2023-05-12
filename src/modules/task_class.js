export default class Tasks {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  }

  addTask(description) {
    const task = { description, completed: false, id: this.tasks.length };
    this.tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  removeTask(id) {
    const index = this.tasks.findIndex((task) => task.id === Number(id));
    if (index !== -1) {
      this.tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }

  displayTasks() {
    const tasksList = document.getElementById('tasks_list');
    tasksList.innerHTML = '';
    this.tasks.forEach((task) => {
      const taskItem = document.createElement('li');
      taskItem.classList.add('task');
      taskItem.innerHTML = `${task.description}<button class="button_remove" data-id="${task.id}" alt="">Remove</button>`;
      tasksList.appendChild(taskItem);

      const removeButton = taskItem.querySelector('.button_remove');
      removeButton.addEventListener('click', (event) => {
        const { id } = event.target.dataset;
        this.removeTask(id);
        this.displayTasks();
      });
    });
  }
}
export { Tasks };