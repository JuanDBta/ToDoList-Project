const statusMethods = {
  updateStatus(id, completed) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskIndex = tasks.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
      tasks[taskIndex].completed = completed;
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  },
  clearCompletedTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter((task) => !task.completed);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  },
};
export default statusMethods;
