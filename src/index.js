// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';

const tasks = [];

const newTask1 = {
  description: 'New task 1',
  completed: false,
  index: 0,
};

const newTask2 = {
  description: 'New task 2',
  completed: false,
  index: 1,
};

const newTask3 = {
  description: 'New task 3',
  completed: false,
  index: 2,
};

tasks.push(newTask1);
tasks.push(newTask2);
tasks.push(newTask3);

const addNewTask = () => {
  const tasksList = document.getElementById('tasks');
  tasks.forEach((task) => {
    const element = document.createElement('li');
    element.innerHTML = task.description;
    tasksList.appendChild(element);
  });
};

addNewTask();