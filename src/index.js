import './style.css';
import { Tasks } from './modules/task_class.js';
import { addTaskSubmit, removeTaskClick } from './modules/add_remove_task.js';
import statusMethods from './modules/checkbox_events.js';
import sync from './assets/sync-outline.svg';
import enter from './assets/enter.svg';

const syncLocation = document.querySelector('#sync_button');
const syncImg = document.createElement('img');
syncImg.classList.add('sync_img');
syncImg.src = sync;
syncImg.alt = '';
syncLocation.appendChild(syncImg);

const enterLocation = document.querySelector('.button_add');
const enterImg = document.createElement('img');
enterImg.classList.add('enter_task');
enterImg.src = enter;
enterImg.alt = '';
enterLocation.appendChild(enterImg);

const tasks = new Tasks();
tasks.displayTasks();
addTaskSubmit();
removeTaskClick();

const clearAllButton = document.getElementById('clear_all');
clearAllButton.addEventListener('click', () => {
  statusMethods.clearCompletedTasks();
  tasks.clearCompletedTasks();
  tasks.displayTasks();
});