import trash from '../assets/trash-outline.svg';
import menu from '../assets/ellipsis-vertical-outline.svg';

export default class Tasks {
  constructor() {
    if (!localStorage.getItem('tasks')) {
      localStorage.setItem('tasks', JSON.stringify([]));
    }
    this.tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  addTask(description) {
    const task = { description, completed: false, id: this.tasks.length + 1 };
    this.tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  removeTask(id) {
    const index = this.tasks.findIndex((task) => task.id === Number(id));
    if (index !== -1) {
      this.tasks.splice(index, 1);
      this.updateTaskIds();
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }

  updateTaskIds() {
    this.tasks = this.tasks.map((task, index) => ({
      ...task,
      id: index + 1,
    }));
  }

  editTask(id, newDescription) {
    const index = this.tasks.findIndex((task) => task.id === Number(id));
    if (index !== -1) {
      this.tasks[index].description = newDescription;
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }

  updateTaskStatus(id, completed) {
    const index = this.tasks.findIndex((task) => task.id === Number(id));
    if (index !== -1) {
      this.tasks[index].completed = completed;
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }

  displayTasks() {
    const tasksList = document.getElementById('tasks_list');
    tasksList.innerHTML = '';
    this.tasks.forEach((task) => {
      const taskItem = document.createElement('li');
      taskItem.classList.add('task');

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.name = 'task_status';
      checkbox.classList.add('checkbox');
      checkbox.id = `task_${task.id}`;
      checkbox.checked = task.completed;
      taskItem.appendChild(checkbox);

      const label = document.createElement('label');
      label.textContent = task.description;
      label.setAttribute('for', checkbox.id);
      taskItem.appendChild(label);

      const removeButton = document.createElement('img');
      removeButton.classList.add('button_remove');
      removeButton.dataset.id = task.id;
      removeButton.src = trash;
      removeButton.alt = '';
      taskItem.appendChild(removeButton);

      const menuButton = document.createElement('img');
      menuButton.classList.add('menu_button');
      menuButton.src = menu;
      menuButton.alt = '';
      taskItem.appendChild(menuButton);

      tasksList.appendChild(taskItem);

      removeButton.addEventListener('click', (event) => {
        const { id } = event.target.dataset;
        this.removeTask(id);
        this.displayTasks();
      });

      checkbox.addEventListener('click', (event) => {
        event.stopPropagation();

        const { id } = task;
        const completed = event.target.checked;
        this.updateTaskStatus(id, completed);
      });

      taskItem.addEventListener('click', (event) => {
        event.stopPropagation();
        const { id } = task;
        const taskText = event.target.textContent;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = taskText.trim();
        input.classList.add('edit_input');
        taskItem.innerHTML = '';
        taskItem.appendChild(input);
        input.focus();

        input.addEventListener('blur', () => {
          const newDescription = input.value;
          this.editTask(id, newDescription);
          this.displayTasks();
        });

        input.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            const newDescription = input.value;
            this.editTask(id, newDescription);
            this.displayTasks();
          }
        });
      });
    });
  }
}

export { Tasks };