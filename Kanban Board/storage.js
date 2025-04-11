// //get items from local storage key of 'tasks'
// // Function to update local
// // storage with current tasks
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function updateLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function setTasks(newTasks){
    tasks = newTasks;
    updateLocalStorage;
}

// Export both tasks and updateLocalStorage to be used by other modules
export { tasks, updateLocalStorage, setTasks };