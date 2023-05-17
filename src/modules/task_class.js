import trash from '../assets/trash-outline.svg';
import menu from '../assets/ellipsis-vertical-outline.svg';

export default class Tasks {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
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
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }

  editTask(id, newDescription) {
    const index = this.tasks.findIndex((task) => task.id === Number(id));
    if (index !== -1) {
      this.tasks[index].description = newDescription;
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }

  displayTasks() {
    const tasksList = document.getElementById('tasks_list');
    tasksList.innerHTML = '';
    this.tasks.forEach((task) => {
      const taskItem = document.createElement('li');
      taskItem.classList.add('task');

      taskItem.innerHTML = `<input type="checkbox" name="task_status" class="checkbox">
      ${task.description}<a href="#">
      <img class="button_remove" data-id="${task.id}" src="${trash}" alt="">
      <img class="menu_button" src="${menu}" alt=""></a>`;
      tasksList.appendChild(taskItem);

      const removeButton = taskItem.querySelector('.button_remove');
      removeButton.addEventListener('click', (event) => {
        const { id } = event.target.dataset;
        this.removeTask(id);
        this.displayTasks();
      });

      taskItem.addEventListener('click', (event) => {
        const { id } = task;
        const taskText = event.target.textContent;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = taskText.trim();
        input.classList.add('edit_input'); // Agregamos la clase "edit_input"
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
        
        checkbox.addEventListener('click', (event) => {
          event.stopPropagation(); // Detiene la propagación del evento
  
          const { id } = task;
          const completed = event.target.checked;
          this.updateTaskStatus(id, completed);
        });
      });
    });
  }
}
export { Tasks };
