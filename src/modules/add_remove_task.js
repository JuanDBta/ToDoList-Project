import { Tasks } from './task_class.js';

const tasks = new Tasks();

export default function addTaskSubmit() {
  const addTaskInput = document.getElementById('add_new_task');
  addTaskInput.addEventListener('submit', (event) => {
    event.preventDefault();
    const description = document.getElementById('description').value;
    tasks.addTask(description);
    tasks.displayBooks();
    addTaskInput.reset();
  });
}
/*
const removeTaskClick = () => {
  const bookList = document.getElementById('book-list');
  bookList.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-title')) {
      const { id } = event.target.dataset;
      books.removeBook(id);
      books.displayBooks();
    }
  })
}; */

export { addTaskSubmit };
