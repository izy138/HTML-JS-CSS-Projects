//get items from local storage key of 'tasks'
//hash map where the key is tasks and the output is the content of the 
let tasks = JSON.parse(localStorage.getItem('tasks')) || []; // || [] is the same as: if(tasks === undefined) tasks = []
//let tasks = [];
// console.log("tasks =", tasks);

// now in event 'DOMContentLoaded' it will render the tasks on the board
//when the page is loaded in the browser DOMContentLoaded occurs, and renderTasks is executed
document.addEventListener('DOMContentLoaded', renderTasks);

// // Function to render past tasks on the board
function renderTasks() {
    //localStorage.clear();
    const columns = ["to-do", "in-progress", "done"];
    // const columns = ["todo"];

    // for(let i = 0; i<columns.length; i++){
    // console.log('columnId =',columns[i])}
    columns.forEach((columnId) => {
        // console.log("columnId=", columnId);
        const column = document.getElementById(columnId);
        // console.log("column =", column);
        // fist we will need to clear the tasks from the board
        // console.log(column);
        // console.log(column.querySelector(".task-container"));
        // task-container.innerHTML = "";
        // console.log(column);

        //goes through each column and looks inside the task-container div in the todo column and assigns its innerhtml as an empty string
        //without this all the tasks in the array will be rendered multiple times.
        // task.container will keep the array of tasks and everytime you add a task when renderTasks() is executed the preexisting task will also be rendered again.
        // the task is picked up and then emptied out 
        // you dont want to keep adding the same task twice: first you empty the task out then you get the task and then you populate them
        // console.log(column);
        column.querySelector(".task-container").innerHTML = "";
        // console.log(column.querySelector(".task-container"));


        //then we will loop through the tasks and add them to the board
        // console.log(tasks);
        // console.log();   
        tasks.forEach((task) => {
            // console.log(task);
            // if (task != null){
            //     console.log(task);
            //     console.log(task.status);
            // }
            if (task != null && task.status === columnId) {
                // console.log(task)
                const taskElement = createTaskElement(task.content, task.id);
                column.querySelector(".task-container").appendChild(taskElement);
            }
        });
    });
}



// create task element function
function createTaskElement(content, id) {
    const taskId = id;
    //create an element div by document.createElement('div')
    //this div is where the tasks are added to once you type them and click add task.
    //this div is where the tasks are loaded when the page is loaded
    const task = document.createElement('div');
    task.id = taskId; //an attribute
    task.className = "task"; //points to the css file
    task.draggable = true;
    //inside the task-container it will have the content and then the delete button
    //added Task: before the task content

    task.innerHTML = `${content} 
                    <span class = "delete-btn" 
                    onclick= "deleteTask('${taskId}')">
                    ❌
                    </span>`;

    // adds an event listener for "dragstart" 
    //when the task is clicked and dragged the page triggers the "dragstart" event
    //the event listener will then execute the drag function
    // the drag function will execute:
    // event.dataTransfer.setData("text/plain",event.target.id);
    //the event is the task you are clicking and dragging. 
    //the dataTransfer object is part of the drag event, it holds the data from the task being dragged.
    // setData: When you start dragging an element, you can store some data (like an element’s ID, a file, or text) using setData() so that it can be accessed when the element is dropped.
    // This data is later retrieved when the element is dropped.
    task.addEventListener("dragstart", drag);

    return task;
}

//columnId = "todo" , "in-progess", "done"
//taskInput is assigned in the html file as the id of the text input inside the todo div
//taskContent is the the tasksInput value and trim takes off the white space of the input.
//if taskContent is not enpty, a newTask is made where is is assigned id: task- and the date, with content: TaskContent and with status:columnId
//the newTask is pushed into the new tasks array with tasks.push(newTask)
//local storge is updated and rendertasks is executed
//the taskInput value is then emptied with taskInput.value = "";
function addTask(columnId) {
    const taskInput = document.getElementById("taskInput");
    const taskContent = taskInput.value.trim();
    if (taskContent !== "") {  //if the taskContent is NOT an empty string (anything that is not null)
        const newTask = {
            id: "task-" + Date.now(),
            // id: `task-${Date.now()}`,
            content: taskContent,
            status: columnId,
        };
        // console.log('New task:', newTask);  // Check the structure of the new task
        tasks.push(newTask);
        // console.log('Updated tasks:', tasks);
        //update localStorage
        updateLocalStorage();
        renderTasks();
        taskInput.value = "";
    }
}

// // Function to delete a task
//takes the taskId which is assigned when the task is made
//when the delete button is pressed the id is pass through this function
// .filter will delete the task and the tas
function deleteTask(taskId) {
    // console.log("task to delete",taskId);
    // console.log("tasks before deletion", tasks);
    //this updats tasks array where tasks is filtered using tasks.filter and the parameter for what is allo
    // console.log(tasks)

    tasks = tasks.filter((task) => task.id !== taskId);
    // console.log('Tasks after deletion:', tasks);
    // console.log(tasks)
    updateLocalStorage();
    renderTasks();
}

//the default is to not allow items to be dropped
//event.preventDefault(); prevents this default setting and allows tasks to be dropped into columns
function allowDrop(event) {
    event.preventDefault();
}

//event.target.id:
// This retrieves the id of the element that is being dragged. 
// By using setData, the element's ID will be stored in the dataTransfer object 
// and can be retrieved during the drop event.
function drag(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
}


// function drop(event,columnId){
//     event.preventDefault();
//     console.log(columnId);
//     //
//     const data= event.dataTransfer.getData("text/plain");
//     console.log(data);
//     const draggedElement = document.getElementById(data);
//     console.log(draggedElement);
//     if(draggedElement){
//         const taskStatus = columnId;
//         updateTaskStatus(data,taskStatus);

// const dropTarget = event.currentTarget;
// const taskContainer = dropTarget.querySelector(".task-container");
// // If the taskContainer exists, append the dragged element to it
// if (taskContainer) {
//                     taskContainer.appendChild(draggedElement);
//                 } else {
//                     console.error("Task container not found in column:", columnId);
//                 }

//    // event.target.querySelector(".task-container").appendChild(draggedEleement);
//     }
// }
function drop(event, columnId) {
    event.preventDefault();

    // Get the dragged element's ID and find the element
    const data = event.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(data);

    // console.log(JSON.parse(localStorage.getItem("tasks")));

    if (draggedElement) {
        // Update task status based on the columnId (if you need this for your app logic)
        const taskStatus = columnId;
        updateTaskStatus(data, taskStatus);



        // Use event.currentTarget to refer to the entire column (the one with the drop event listener)
        const dropTarget = event.currentTarget;

        // Find the .task-container inside the dropTarget (the column)
        const taskContainer = dropTarget.querySelector(".task-container");

        // If the taskContainer exists, append the dragged element to it
        if (taskContainer) {
            taskContainer.appendChild(draggedElement);
        }
    }
    // console.log(JSON.parse(localStorage.getItem("tasks")));


}

function capitalizeInput(input) {
    input.value = input.value.toUpperCase();
}

// Function to update task status
// when moved to another column
function updateTaskStatus(taskId, newStatus) {
    // console.log(newStatus);
    tasks = tasks.map((task) => {
        // console.log(task);
        // console.log(taskId);
        if (task.id === taskId) {
            // console.log("inside if");
            return { ...task, status: newStatus };
        }
        return task;
    });
    // tasks.addEventListener("dragstart", drag);
    updateLocalStorage();
}

// Function to update local
// storage with current tasks
function updateLocalStorage() {
    // console.log("task update");
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
