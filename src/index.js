// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';
import { Tasks } from './modules/task_class.js';
import { addTaskSubmit } from './modules/add_remove_task.js';

const tasks = new Tasks();
tasks.displayTasks();
addTaskSubmit();