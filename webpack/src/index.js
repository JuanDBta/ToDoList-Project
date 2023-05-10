import _ from 'lodash';
import './style.css';

function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['To Do', 'List'], ' ');
  element.classList.add('main_title');

  element.appendChild('list_container');
  return element;
}

document.body.appendChild(component());