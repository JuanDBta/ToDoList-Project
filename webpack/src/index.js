import _ from 'lodash';
import './style.css';
import printMe from './print.js';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
  
  // Lodash, now imported by this script
    element.innerHTML = _.join(['To Do', 'List'], ' ');
    element.classList.add('main_title');
    btn.innerHTML = 'Add task';
    btn.onclick = printMe;

  element.appendChild(btn);
  
    return element;
  }
  
  document.body.appendChild(component());