const statusMethods = {
    updateStatus(id, completed) {
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      const taskIndex = tasks.findIndex((task) => task.id === id);
      if (taskIndex !== -1) {
        tasks[taskIndex].completed = completed;
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
    },
  };
  
  const clearAllButton = document.getElementById('clear_all');

clearAllButton.addEventListener('click', () => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const updatedTasks = tasks.filter((task) => task.completed === false);
  localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  
});
  export default statusMethods;
