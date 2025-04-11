// // //get items from local storage key of 'tasks'
// // // Function to update local
// // // storage with current tasks
// // TODO:function updateLocalStorage() {
// //     // console.log("task update");
// //     localStorage.setItem("tasks", JSON.stringify(tasks));
// // }
// // //hash map where the key is tasks and the output is the content of the 
// // TODO: let tasks = JSON.parse(localStorage.getItem('tasks')) || []; // || [] is the same as: if(tasks === undefined) tasks = []
// // // console.log("tasks =", tasks);

// // // now in event 'DOMContentLoaded' it will render the tasks on the board
// // //when the page is loaded in the browser DOMContentLoaded occurs, and renderTasks is executed
// // TODO: document.addEventListener('DOMContentLoaded', function() {
// //     renderTasks();
// //     setupModalFunctionality();
// // });

// // // // Function to render past tasks on the board
// // TODO:function renderTasks() {
// //     //localStorage.clear();
// //     const columns = ["to-do", "in-progress", "done"];
// //     // const columns = ["todo"];

// //     // for(let i = 0; i<columns.length; i++){
// //     // console.log('columnId =',columns[i])}
// //     columns.forEach((columnId) => {
// //         // console.log("columnId=", columnId);
// //         const column = document.getElementById(columnId);
// //         // console.log("column =", column);
// //         // fist we will need to clear the tasks from the board
// //         // console.log(column);
// //         // console.log(column.querySelector(".task-container"));
// //         // task-container.innerHTML = "";
// //         // console.log(column);

// //         //goes through each column and looks inside the task-container div in the todo column and assigns its innerhtml as an empty string
// //         //without this all the tasks in the array will be rendered multiple times.
// //         // task.container will keep the array of tasks and everytime you add a task when renderTasks() is executed the preexisting task will also be rendered again.
// //         // the task is picked up and then emptied out 
// //         // you dont want to keep adding the same task twice: first you empty the task out then you get the task and then you populate them
// //         // console.log(column);
// //         column.querySelector(".task-container").innerHTML = "";
// //         // console.log(column.querySelector(".task-container"));


// //         //then we will loop through the tasks and add them to the board
// //         // console.log(tasks);
// //         // console.log();   
// //         tasks.forEach((task) => {
// //             // console.log(task);
// //             // if (task != null){
// //             //     console.log(task);
// //             //     console.log(task.status);
// //             // }
// //             if (task != null && task.status === columnId) {
// //                 // console.log(task)
// //                 //contains the tasks elements, content, id, prio, date, desc.
// //                 const taskElement = createTaskElement(
// //                     task.content, 
// //                     task.id,
// //                     task.priority,
// //                     task.dueDate,
// //                     task.description
// //                 );
// //                 column.querySelector(".task-container").appendChild(taskElement);
// //             }
// //         });
// //     });

    
// //     //close drop down menu when clicking out of it
// //     document.addEventListener('click', function(e){
// //     // when selecting the date, prevents the dropdown menu from closing
// //         if (e.target.type === 'date') {
// //             e.stopPropagation();
// //             return;
// //         }
        
// //         // if the click is not on a the dropdown menu or dropdown button, close all dropdowns
// //         if (!e.target.closest('.task-dropdown') && !e.target.closest('.toggle-details-btn')) {
// //             closeAllDropdowns();
// //         }
// //     });
// // }
// // //closes all dropdown menus
// // TODO: function closeAllDropdowns(){
// //     document.querySelectorAll('.task-dropdown').forEach(dropdown => {
// //         dropdown.style.display = 'none';
// //     });
// // }

// // TODO:function toggleDropdown(taskId,event){
// //     event.stopPropagation();

// //     //gets the current dropdown menu
// //     const dropdown = document.getElementById(`dropdown-${taskId}`);
// //     if(!dropdown) return;

// //     //checks if the dropdown is open
// //     const isOpen = dropdown.style.display === 'block';

// //     //if a dropdown menu is open, close it
// //     if(isOpen){
// //         dropdown.style.display = 'none';
// //         return;
// //     }
// //     //closes all dropdown menus first
// //     closeAllDropdowns();
// //     //opens the current dropdown
// //     dropdown.style.display = 'block';

// //     //prevents the menu from closing when selecting the date
// //     const dateInputs = dropdown.querySelectorAll('input[type="data"]');
// //     dateInputs.forEach(input => {
// //         input.addEventListener('click', e => e.stopPropagation());
// //     });
// // }

// // // create task element function
// // function createTaskElement(content, id, priority = 'medium', dueDate = "", description = "") {
// //     const taskId = id;
// //     //create an element div by document.createElement('div')
// //     //this div is where the tasks are added to once you type them and click add task.
// //     //this div is where the tasks are loaded when the page is loaded
// //     const task = document.createElement('div');
// //     task.id = taskId; //an attribute
// //     task.className = "task"; //points to the css file
// //     task.draggable = true;
// //     //inside the task-container it will have the content and then the delete button
// //     //added Task: before the task content

// //     // finds the task object
// //     const taskObj = tasks.find(t => t.id === taskId);
// //     // sets description if available
// //     description = taskObj?.description !== undefined ? taskObj.description : description;

// //     // creates priority indicator
// //     const priorityIndicator = document.createElement('div');
// //     priorityIndicator.className = `priority-indicator priority-${priority}`;

// //     // create the tasks header
// //     const taskHeader = document.createElement('div');
// //     taskHeader.className = 'task-header';

// //     //create content element
// //     const contentElement = document.createElement('div');
// //     contentElement.className = 'task-content';
// //     contentElement.textContent = content;

// //     // edit the tasks header on click
// //     contentElement.addEventListener('click', function(e){
// //         e.stopPropagation();
// //         makeContentEditable(contentElement, taskId);
// //     });

// //     // create task infor container (right side of the header)
// //     const taskControls = document.createElement('div');
// //     taskControls.className = 'task-controls';

// //     // create the toggle details button
// //     const toggleButton = document.createElement('div');
// //     toggleButton.className = 'toggle-details-btn';
// //     toggleButton.innerHTML = '⋮'; // vertical elipsis for button
// //     toggleButton.onclick = function(e){
// //         //on click the dropdown menu will appear below it.
// //         toggleDropdown(taskId,e);
// //     }

// //     // create delete button
// //     const deleteButton = document.createElement('span');
// //     deleteButton.className = 'delete-btn';
// //     deleteButton.innerHTML = '❌';
// //     deleteButton.onclick = function(e) {
// //         e.stopPropagation();
// //         //onclick the confirm delete popup will appear
// //         confirmDeleteTask(taskId);
// //     }

// //     //controls for the task header
// //     taskControls.appendChild(toggleButton);
// //     taskControls.appendChild(deleteButton);

// //     //adds the content and the new task controls to the header
// //     taskHeader.appendChild(contentElement);
// //     taskHeader.appendChild(taskControls);

// //     // description area below the tasks header
// //     const descriptionElement = document.createElement('div');
// //     descriptionElement.className = 'task-description';
// //     descriptionElement.textContent = description || ''; 

// //     // edit the description on click
// //     descriptionElement.addEventListener('click', function(e){
// //         e.stopPropagation();
// //         makeDescriptionEditable(descriptionElement,taskId);
// //     });

// //     let dueDateElement = null;
// //     if(dueDate){
// //         dueDateElement = document.createElement('div');
// //         dueDateElement.className = 'task-due-date';

// //         //format date
// //         const formattedDate = formatDate(dueDate);

// //         // if the due date is overdue (the date has passed)
// //         const today = new Date();
// //         todat.setData(0,0,0,0);
// //         const dueDateTime = new Date(dueDate);
// //         dueDateTime.setHours(0,0,0,0);

// //         if(dueDateTime < today){
// //             dueDateElement.classList.add('due-date-overdue');
// //             dueDateElement.textContent = `Due: ${formattedDate} (Overdue)`;
// //         }else {
// //             dueDateElement.textContent = `Due: ${formattedDate}`;
// //         }
// //     }

// //     //DROPDOWN MENU
// //     //create dropdown to edit the priority and due date
// //     const dropdown = document.createElement('div');
// //     dropdown.id = `dropdown-${taskId}`;
// //     dropdown.className = 'task-dropdown';

// //     //priority section of dropdown menu
// //     const prioritySection = document.createElement('div');
// //     prioritySection.className = 'dropdown-section';

// //     //priorty name on dropdown menu
// //     const priorityLabel = document.createElement('div');
// //     priorityLabel.className = 'dropdown-label';
// //     priorityLabel.textContent = 'Priority:';

// //     //selection for priority 
// //     const prioritySelect = document.createElement('select');
// //     prioritySelect.className = 'task-priority-select';

// //     const options = [
// //         { value: 'low', text: 'Low' },
// //         { value: 'medium', text: 'Medium' },
// //         { value: 'high', text: 'High' }
// //     ];
// //     //sets the option to the priority
// //     options.forEach(option => {
// //         const optionElement = document.createElement('option');
// //         optionElement.value = option.value;
// //         optionElement.textContent = option.text;
// //         if (option.value === priority){
// //             optionElement.selected = true;
// //         }
// //         prioritySelect.appendChild(optionElement);
// //     });

// //     prioritySelect.addEventListener('change',function(){
// //         updateTaskPriority(taskId, this.value);
// //     });

// //     prioritySection.appendChild(priorityLabel);
// //     prioritySection.appendChild(prioritySelect);

// //     // Due date section of drop down menu
    



// //     // adds an event listener for "dragstart" 
// //     // when the task is clicked and dragged the page triggers the "dragstart" event
// //     // the event listener will then execute the drag function
// //     // the drag function will execute:
// //     // event.dataTransfer.setData("text/plain",event.target.id);
// //     // the event is the task you are clicking and dragging. 
// //     // the dataTransfer object is part of the drag event, it holds the data from the task being dragged.
// //     // setData: When you start dragging an element, you can store some data (like an element’s ID, a file, or text) using setData() so that it can be accessed when the element is dropped.
// //     // This data is later retrieved when the element is dropped.
// //     task.addEventListener("dragstart", drag);

// //     return task;
// // }

// // //columnId = "todo" , "in-progess", "done"
// // //taskInput is assigned in the html file as the id of the text input inside the todo div
// // //taskContent is the the tasksInput value and trim takes off the white space of the input.
// // //if taskContent is not enpty, a newTask is made where is is assigned id: task- and the date, with content: TaskContent and with status:columnId
// // //the newTask is pushed into the new tasks array with tasks.push(newTask)
// // //local storge is updated and rendertasks is executed
// // //the taskInput value is then emptied with taskInput.value = "";
// // function addTask(columnId) {
// //     const taskInput = document.getElementById("taskInput");
// //     const taskContent = taskInput.value.trim();
// //     if (taskContent !== "") {  //if the taskContent is NOT an empty string (anything that is not null)
// //         const newTask = {
// //             id: "task-" + Date.now(),
// //             // id: `task-${Date.now()}`,
// //             content: taskContent,
// //             status: columnId,
// //         };
// //         // console.log('New task:', newTask);  // Check the structure of the new task
// //         tasks.push(newTask);
// //         // console.log('Updated tasks:', tasks);
// //         //update localStorage
// //         updateLocalStorage();
// //         renderTasks();
// //         taskInput.value = "";
// //     }
// // }

// // // Function to delete a task
// //takes the taskId which is assigned when the task is made
// //when the delete button is pressed the id is pass through this function
// // .filter will delete the task and the tas
// function deleteTask(taskId) {
//     // console.log("task to delete",taskId);
//     // console.log("tasks before deletion", tasks);
//     //this updats tasks array where tasks is filtered using tasks.filter and the parameter for what is allo
//     // console.log(tasks)

//     tasks = tasks.filter((task) => task.id !== taskId);
//     // console.log('Tasks after deletion:', tasks);
//     // console.log(tasks)
//     updateLocalStorage();
//     renderTasks();
// }

// // //the default is to not allow items to be dropped
// // //event.preventDefault(); prevents this default setting and allows tasks to be dropped into columns
// // TODO:function allowDrop(event) {
// //     event.preventDefault();
// // }

// // //event.target.id:
// // // This retrieves the id of the element that is being dragged. 
// // // By using setData, the element's ID will be stored in the dataTransfer object 
// // // and can be retrieved during the drop event.
// // TODO:function drag(event) {
// //     event.dataTransfer.setData("text/plain", event.target.id);
// // }


// // // function drop(event,columnId){
// // //     event.preventDefault();
// // //     console.log(columnId);
// // //     //
// // //     const data= event.dataTransfer.getData("text/plain");
// // //     console.log(data);
// // //     const draggedElement = document.getElementById(data);
// // //     console.log(draggedElement);
// // //     if(draggedElement){
// // //         const taskStatus = columnId;
// // //         updateTaskStatus(data,taskStatus);

// // // const dropTarget = event.currentTarget;
// // // const taskContainer = dropTarget.querySelector(".task-container");
// // // // If the taskContainer exists, append the dragged element to it
// // // if (taskContainer) {
// // //                     taskContainer.appendChild(draggedElement);
// // //                 } else {
// // //                     console.error("Task container not found in column:", columnId);
// // //                 }

// // //    // event.target.querySelector(".task-container").appendChild(draggedEleement);
// // //     }
// // // }
// // TODO:function drop(event, columnId) {
// //     event.preventDefault();

// //     // Get the dragged element's ID and find the element
// //     const data = event.dataTransfer.getData("text/plain");
// //     const draggedElement = document.getElementById(data);

// //     // console.log(JSON.parse(localStorage.getItem("tasks")));

// //     if (draggedElement) {
// //         // Update task status based on the columnId (if you need this for your app logic)
// //         const taskStatus = columnId;
// //         updateTaskStatus(data, taskStatus);



// //         // Use event.currentTarget to refer to the entire column (the one with the drop event listener)
// //         const dropTarget = event.currentTarget;

// //         // Find the .task-container inside the dropTarget (the column)
// //         const taskContainer = dropTarget.querySelector(".task-container");

// //         // If the taskContainer exists, append the dragged element to it
// //         if (taskContainer) {
// //             taskContainer.appendChild(draggedElement);
// //         }
// //     }
// //     // console.log(JSON.parse(localStorage.getItem("tasks")));


// // }

// // function capitalizeInput(input) {
// //     input.value = input.value.toUpperCase();
// // }

// // // Function to update task status
// // // when moved to another column
// // function updateTaskStatus(taskId, newStatus) {
// //     // console.log(newStatus);
// //     tasks = tasks.map((task) => {
// //         // console.log(task);
// //         // console.log(taskId);
// //         if (task.id === taskId) {
// //             // console.log("inside if");
// //             return { ...task, status: newStatus };
// //         }
// //         return task;
// //     });
// //     // tasks.addEventListener("dragstart", drag);
// //     updateLocalStorage();
// // }
// x
// // taskRenderer.js - Handles rendering tasks to the DOM
// import { tasks } from './storage.js';
// import { 
//     makeDescriptionEditable, 
//     makeContentEditable, 
//     updateTaskPriority, 
//     updateTaskDueDate,
//     confirmDeleteTask
// } from './taskActions.js';
// import { drag } from './dragDrop.js';

// // close all dropdown menus when clicking a new dropdown or clicking outside of menu
// function closeAllDropdowns() {
//     document.querySelectorAll('.task-dropdown').forEach(dropdown => {
//         dropdown.style.display = 'none';
//     });
// }

// // toggle dropdown menu when clicked and closes any open dropdowns 
// function toggleDropdown(taskId,event){
//     event.stopPropagation();

//     //gets the current dropdown menu
//     const dropdown = document.getElementById(`dropdown-${taskId}`);
//     if(!dropdown) return;

//     //checks if the dropdown is open
//     const isOpen = dropdown.style.display === 'block';

//     //if a dropdown menu is open, close it
//     if(isOpen){
//         dropdown.style.display = 'none';
//         return;
//     }
//     //closes all dropdown menus first
//     closeAllDropdowns();
//     //opens the current dropdown
//     dropdown.style.display = 'block';

//     //prevents the menu from closing when selecting the date
//     const dateInputs = dropdown.querySelectorAll('input[type="data"]');
//     dateInputs.forEach(input => {
//         input.addEventListener('click', e => e.stopPropagation());
//     });
// }

// // date formatting
// function formatDate(dateString) {
//     const date = new Date(dateString);
//     const options = { year: 'numeric', month: 'short', day: 'numeric' };
//     return date.toLocaleDateString(undefined, options);
// }

// // renders any existing tasks from previous sessions on the board
// function renderTasks() {
//     const columns = ["to-do", "in-progress", "done"];

//     columns.forEach((columnId) => {
//         const column = document.getElementById(columnId);
//         /** fist we will need to clear the tasks from the board
//          * goes through each column and looks inside the task-container div in the todo column and assigns its innerhtml as an empty string
//          * without this all the tasks in the array will be rendered multiple times.
//          * task.container will keep the array of tasks and everytime you add a task when renderTasks() is executed the preexisting task will also be rendered again.
//          * the task is picked up and then emptied out 
//          * you dont want to keep adding the same task twice: first you empty the task out then you get the task and then you populate them */
//         column.querySelector(".task-container").innerHTML = "";
//         //then we will loop through the tasks and add them to the board
//         tasks.forEach((task) => {
//             // contains the tasks elements, content, id, prio, date, desc.
//             if (task != null && task.status === columnId) {
//                 const taskElement = createTaskElement(
//                     task.content, 
//                     task.id, 
//                     task.priority, 
//                     task.dueDate, 
//                     task.description
//                 );
//                 column.querySelector(".task-container").appendChild(taskElement);
//             }
//         });
//     });
    
//     // Close any open dropdown menus when clicking outside of them
//     document.addEventListener('click', function(e) {
//         // Special handling for date inputs to prevent dropdown from closing
//         if (e.target.type === 'date') {
//             e.stopPropagation();
//             return;
//         }
        
//         // If the click is not on a dropdown or dropdown button, close all dropdowns
//         if (!e.target.closest('.task-dropdown') && !e.target.closest('.toggle-details-btn')) {
//             closeAllDropdowns();
//         }
//     });
// }

// // create task elements and its features
// function createTaskElement(content, id, priority = "medium", dueDate = "", description = "") {
//     const taskId = id;
//     const task = document.createElement('div');
//     task.id = taskId;
//     task.className = "task";
//     task.draggable = true;
    
//     // Find the task object
//     const taskObj = tasks.find(t => t.id === taskId);
//     // Use description from task object if available
//     description = taskObj?.description !== undefined ? taskObj.description : description;
    
//     // Create priority indicator
//     const priorityIndicator = document.createElement('div');
//     priorityIndicator.className = `priority-indicator priority-${priority}`;
    
//     // Create task header
//     const taskHeader = document.createElement('div');
//     taskHeader.className = 'task-header';
    
//     // Create content element
//     const contentElement = document.createElement('div');
//     contentElement.className = 'task-content';
//     contentElement.textContent = content;
    
//     // Add click event to make content editable
//     contentElement.addEventListener('click', function(e) {
//         e.stopPropagation();
//         makeContentEditable(contentElement, taskId);
//     });
    
//     // Create task info container (for right side of header)
//     const taskControls = document.createElement('div');
//     taskControls.className = 'task-controls';
    
//     // Create toggle details button
//     const toggleButton = document.createElement('button');
//     toggleButton.className = 'toggle-details-btn';
//     toggleButton.innerHTML = '⋮'; // vertical ellipsis
//     toggleButton.onclick = function(e) {
//         toggleDropdown(taskId, e);
//     };
    
//     // Create delete button
//     const deleteButton = document.createElement('span');
//     deleteButton.className = 'delete-btn';
//     deleteButton.innerHTML = '❌';
//     deleteButton.onclick = function(e) { 
//         e.stopPropagation();
//         confirmDeleteTask(taskId);
//     };
    
//     // Add controls to task header
//     taskControls.appendChild(toggleButton);
//     taskControls.appendChild(deleteButton);
    
//     // Assemble task header
//     taskHeader.appendChild(contentElement);
//     taskHeader.appendChild(taskControls);
    
//     // Create description area (visible by default)
//     const descriptionElement = document.createElement('div');
//     descriptionElement.className = 'task-description';
//     descriptionElement.textContent = description || '';
    
//     // Make description editable on click
//     descriptionElement.addEventListener('click', function(e) {
//         e.stopPropagation();
//         makeDescriptionEditable(descriptionElement, taskId);
//     });
    
//     // Create due date display if applicable
//     let dueDateElement = null;
//     if (dueDate) {
//         dueDateElement = document.createElement('div');
//         dueDateElement.className = 'task-due-date';
        
//         // Format the date nicely
//         const formattedDate = formatDate(dueDate);
        
//         // Check if overdue
//         const today = new Date();
//         today.setHours(0, 0, 0, 0);
//         const dueDateTime = new Date(dueDate);
//         dueDateTime.setHours(0, 0, 0, 0);
        
//         if (dueDateTime < today) {
//             dueDateElement.classList.add('due-date-overdue');
//             dueDateElement.textContent = `Due: ${formattedDate} (Overdue)`;
//         } else {
//             dueDateElement.textContent = `Due: ${formattedDate}`;
//         }
//     }
    
//     // Create dropdown menu for task options
//     const dropdown = document.createElement('div');
//     dropdown.id = `dropdown-${taskId}`;
//     dropdown.className = 'task-dropdown';
    
//     // Priority section
//     const prioritySection = document.createElement('div');
//     prioritySection.className = 'dropdown-section';
    
//     const priorityLabel = document.createElement('div');
//     priorityLabel.className = 'dropdown-label';
//     priorityLabel.textContent = 'Priority:';
    
//     // Priority dropdown
//     const prioritySelect = document.createElement('select');
//     prioritySelect.className = 'task-priority-select';
    
//     const options = [
//         { value: 'low', text: 'Low' },
//         { value: 'medium', text: 'Medium' },
//         { value: 'high', text: 'High' }
//     ];
    
//     options.forEach(option => {
//         const optionElement = document.createElement('option');
//         optionElement.value = option.value;
//         optionElement.textContent = option.text;
//         if (option.value === priority) {
//             optionElement.selected = true;
//         }
//         prioritySelect.appendChild(optionElement);
//     });
    
//     prioritySelect.addEventListener('change', function() {
//         updateTaskPriority(taskId, this.value);
//     });
    
//     prioritySection.appendChild(priorityLabel);
//     prioritySection.appendChild(prioritySelect);
    
//     // Due date section
//     const dueDateSection = document.createElement('div');
//     dueDateSection.className = 'dropdown-section';
//     dueDateSection.style.position = 'relative'; // Ensure proper positioning
    
//     const dueDateLabel = document.createElement('div');
//     dueDateLabel.className = 'dropdown-label';
//     dueDateLabel.textContent = 'Due Date:';
    
//     // Create a wrapper for the date input to help with positioning
//     const dateInputWrapper = document.createElement('div');
//     dateInputWrapper.className = 'date-input-wrapper';
//     dateInputWrapper.style.position = 'relative';
    
//     const dueDateInput = document.createElement('input');
//     dueDateInput.type = 'date';
//     dueDateInput.className = 'task-due-date-input';
//     // Ensure the date input is properly initialized
//     if (dueDate) {
//         dueDateInput.value = dueDate;
//     }
    
//     // Make sure the event listener captures the date change
//     dueDateInput.addEventListener('change', function(e) {
//         e.stopPropagation(); // Prevent the event from closing the dropdown
//         updateTaskDueDate(taskId, this.value);
//     });
    
//     // Prevent all events from bubbling up to prevent dropdown closure
//     dueDateInput.addEventListener('click', function(e) {
//         e.stopPropagation();
//     });
//     dueDateInput.addEventListener('focus', function(e) {
//         e.stopPropagation();
//     });
    
//     // Add double-click handler to help with date picker on some browsers
//     dueDateInput.addEventListener('dblclick', function(e) {
//         e.stopPropagation();
//         // Create a temporary hidden input to help launch the native date picker
//         const tempInput = document.createElement('input');
//         tempInput.type = 'date';
//         tempInput.style.position = 'absolute';
//         tempInput.style.opacity = '0';
//         document.body.appendChild(tempInput);
//         tempInput.focus();
//         tempInput.click();
        
//         // Copy the value when selected
//         tempInput.addEventListener('change', function() {
//             dueDateInput.value = this.value;
//             updateTaskDueDate(taskId, this.value);
//             document.body.removeChild(tempInput);
//         });
        
//         // Remove after blur
//         tempInput.addEventListener('blur', function() {
//             setTimeout(() => {
//                 if (document.body.contains(tempInput)) {
//                     document.body.removeChild(tempInput);
//                 }
//             }, 100);
//         });
//     });
    
//     // Add input to wrapper, then add wrapper to section
//     dateInputWrapper.appendChild(dueDateInput);
//     dueDateSection.appendChild(dueDateLabel);
//     dueDateSection.appendChild(dateInputWrapper);
    
//     // Add sections to dropdown menu
//     dropdown.appendChild(prioritySection);
//     dropdown.appendChild(dueDateSection);
    
//     // Assemble task
//     task.appendChild(priorityIndicator);
//     task.appendChild(taskHeader);
//     task.appendChild(descriptionElement); // Add description under header
//     if (dueDateElement) {
//         task.appendChild(dueDateElement);
//     }
//     task.appendChild(dropdown);

//     // Add drag event listener
//     task.addEventListener("dragstart", drag);

//     return task;
// }

// export { 
//     renderTasks, 
//     createTaskElement, 
//     closeAllDropdowns, 
//     toggleDropdown,
//     formatDate
// };

// // taskActions.js - Handles task-related actions
// import { tasks, updateLocalStorage, setTasks} from './storage.js';
// import { renderTasks, createTaskElement } from './taskRender.js';


// function addTask(columnId) {
//     const taskInput = document.getElementById("taskInput");
//     const dueDateInput = document.getElementById("dueDateInput");
//     const taskContent = taskInput.value.trim();
//     const dueDate = dueDateInput.value;
    
//     if (taskContent !== "") {
//         const newTask = {
//             id: "task-" + Date.now(),
//             content: taskContent,
//             status: columnId,
//             priority: "medium", // Default priority
//             dueDate: dueDate,
//             description: "" // Initialize with empty description
//         };
        
//         tasks.push(newTask);
//         updateLocalStorage();
//         renderTasks();
//         taskInput.value = "";
//         dueDateInput.value = "";
//     }
// }

// function createTaskFromModal() {
//     const modalTaskInput = document.getElementById('modalTaskInput');
//     const modalDescriptionInput = document.getElementById('modalDescriptionInput');
//     const modalPriorityInput = document.getElementById('modalPriorityInput');
//     const modalDueDateInput = document.getElementById('modalDueDateInput');
    
//     const taskName = modalTaskInput.value.trim();
//     const description = modalDescriptionInput.value.trim();
//     const priority = modalPriorityInput.value;
//     const dueDate = modalDueDateInput.value;
    
//     // Create the new task
//     const newTask = {
//         id: "task-" + Date.now(),
//         content: taskName,
//         status: "to-do",
//         priority: priority,
//         dueDate: dueDate,
//         description: description
//     };
    
//     // Add to tasks array
//     tasks.push(newTask);
//     updateLocalStorage();
    
//     // Update and render
//     renderTasks();
    
//     // Close the modal
//     const taskModal = document.getElementById('taskModal');
//     taskModal.style.display = 'none';
// }

// function saveContent(input, contentElement, taskId) {
//     const newContent = input.value.trim();
    
//     // Don't allow empty task names
//     if (!newContent) {
//         // Restore the original content if empty
//         input.parentNode.replaceChild(contentElement, input);
//         return;
//     }
    
//     // First update the task in the tasks array
//     for (let i = 0; i < tasks.length; i++) {
//         if (tasks[i].id === taskId) {
//             tasks[i].content = newContent;
//             break;
//         }
//     }
    
//     // Update the content element with new text
//     contentElement.textContent = newContent;
    
//     // Replace input with the content element
//     if (input.parentNode) {
//         input.parentNode.replaceChild(contentElement, input);
//     }
    
//     // Save to localStorage
//     updateLocalStorage();
    
//     console.log(`Content saved for task ${taskId}:`, newContent);
// }

// function saveDescription(textarea, descriptionElement, taskId) {
//     const newDescription = textarea.value.trim();
    
//     // First update the task in the tasks array
//     for (let i = 0; i < tasks.length; i++) {
//         if (tasks[i].id === taskId) {
//             tasks[i].description = newDescription;
//             break;
//         }
//     }
    
//     // Update the description element with new text
//     descriptionElement.textContent = newDescription;
    
//     // Replace textarea with the description element
//     if (textarea.parentNode) {
//         textarea.parentNode.replaceChild(descriptionElement, textarea);
//     }
    
//     // Save to localStorage
//     updateLocalStorage();
    
//     console.log(`Description saved for task ${taskId}:`, newDescription);
// }

// function confirmDeleteTask(taskId) {
//     // Find the task to get its content for the confirmation message
//     const task = tasks.find(t => t.id === taskId);
//     if (!task) return;
    
//     // Create confirmation popup
//     const confirmPopup = document.createElement('div');
//     confirmPopup.className = 'delete-confirmation-popup';
    
//     // Create confirmation message
//     const message = document.createElement('div');
//     message.className = 'confirmation-message';
//     message.textContent = `Are you sure you want to delete "${task.content}"?`;
    
//     // Create buttons container
//     const buttonContainer = document.createElement('div');
//     buttonContainer.className = 'confirmation-buttons';
    
//     // Create cancel button
//     const cancelButton = document.createElement('button');
//     cancelButton.className = 'cancel-delete-btn';
//     cancelButton.textContent = 'Cancel';
//     cancelButton.onclick = function() {
//         document.body.removeChild(confirmPopup);
//     };
    
//     // Create confirm button
//     const confirmButton = document.createElement('button');
//     confirmButton.className = 'confirm-delete-btn';
//     confirmButton.textContent = 'Delete';
//     confirmButton.onclick = function() {
//         deleteTask(taskId);
//         document.body.removeChild(confirmPopup);
//     };
    
//     // Assemble the popup
//     buttonContainer.appendChild(cancelButton);
//     buttonContainer.appendChild(confirmButton);
//     confirmPopup.appendChild(message);
//     confirmPopup.appendChild(buttonContainer);
    
//     // Add popup to the document
//     document.body.appendChild(confirmPopup);
    
//     // Add click outside to cancel
//     confirmPopup.addEventListener('click', function(e) {
//         if (e.target === confirmPopup) {
//             document.body.removeChild(confirmPopup);
//         }
//     });
// }
// function deleteTask(taskId) {
//     const newTasks = tasks.filter((task) => task.id !== taskId);
//     setTasks(newTasks);
//     renderTasks();
// }
// // //takes the taskId which is assigned when the task is made
// // //when the delete button is pressed the id is pass through this function
// // // .filter will delete the task and the tas
// // function deleteTask(taskId) {
// //      //this updats tasks array where tasks is filtered using tasks.filter 
// //     tasks = tasks.filter((task) => task.id !== taskId);
// //     updateLocalStorage();
// //     renderTasks();
// // }

// function makeDescriptionEditable(descriptionElement, taskId) {
//     // Get the current task
//     const task = tasks.find(t => t.id === taskId);
//     if (!task) return;
    
//     // Store current description text
//     const currentText = task.description || '';
    
//     // Create textarea for editing
//     const textarea = document.createElement('textarea');
//     textarea.className = 'task-description-textarea';
//     textarea.value = currentText;
//     textarea.style.height = Math.max(60, descriptionElement.offsetHeight) + 'px';
    
//     // Replace description element with textarea
//     descriptionElement.parentNode.replaceChild(textarea, descriptionElement);
//     textarea.focus();
    
//     // Handle saving when focus is lost
//     textarea.addEventListener('blur', function() {
//         saveDescription(textarea, descriptionElement, taskId);
//     });
    
//     // Handle Enter key (without shift) to save
//     textarea.addEventListener('keydown', function(e) {
//         if (e.key === 'Enter' && !e.shiftKey) {
//             e.preventDefault();
//             saveDescription(textarea, descriptionElement, taskId);
//         }
//     });
// }

// function makeContentEditable(contentElement, taskId) {
//     // Get the current task
//     const task = tasks.find(t => t.id === taskId);
//     if (!task) return;
    
//     // Store current content text
//     const currentText = task.content || '';
    
//     // Create input for editing
//     const input = document.createElement('input');
//     input.type = 'text';
//     input.className = 'task-content-input';
//     input.value = currentText;
    
//     // Replace content element with input
//     contentElement.parentNode.replaceChild(input, contentElement);
//     input.focus();
    
//     // Handle saving when focus is lost
//     input.addEventListener('blur', function() {
//         saveContent(input, contentElement, taskId);
//     });
    
//     // Handle Enter key to save
//     input.addEventListener('keydown', function(e) {
//         if (e.key === 'Enter') {
//             e.preventDefault();
//             saveContent(input, contentElement, taskId);
//         }
//     });
// }

// function updateTaskStatus(taskId, newStatus) {
//     // Find the task to update
//     const taskIndex = tasks.findIndex(task => task.id === taskId);
//     if (taskIndex === -1) return;
    
//     // Update the task
//     tasks[taskIndex] = { ...tasks[taskIndex], status: newStatus };
    
//     // Update local storage
//     updateLocalStorage();
// }

// function updateTaskPriority(taskId, newPriority) {
//     // Find the task to update
//     const taskIndex = tasks.findIndex(task => task.id === taskId);
//     if (taskIndex === -1) return;
    
//     // Update the task
//     tasks[taskIndex] = { ...tasks[taskIndex], priority: newPriority };
    
//     // Update local storage
//     updateLocalStorage();
    
//     // Update the priority indicator visually without rerendering the whole board
//     const taskElement = document.getElementById(taskId);
//     if (taskElement) {
//         const priorityIndicator = taskElement.querySelector('.priority-indicator');
//         if (priorityIndicator) {
//             // Remove all priority classes
//             priorityIndicator.classList.remove('priority-low', 'priority-medium', 'priority-high');
//             // Add the new priority class
//             priorityIndicator.classList.add(`priority-${newPriority}`);
//         }
//     }
// }

// function updateTaskDueDate(taskId, newDueDate) {
//     // Find the task to update
//     const taskIndex = tasks.findIndex(task => task.id === taskId);
//     if (taskIndex === -1) return;
    
//     const task = tasks[taskIndex];
//     const oldDueDate = task.dueDate;
    
//     // Update the task
//     tasks[taskIndex] = { ...task, dueDate: newDueDate };
    
//     // Update local storage
//     updateLocalStorage();
    
//     // If due date changed significantly, we need to re-render the task
//     if (!!oldDueDate !== !!newDueDate || oldDueDate !== newDueDate) {
//         const taskElement = document.getElementById(taskId);
//         if (taskElement) {
//             const parentContainer = taskElement.parentNode;
//             const updatedTask = tasks[taskIndex];
            
//             const newTaskElement = createTaskElement(
//                 updatedTask.content, 
//                 updatedTask.id, 
//                 updatedTask.priority, 
//                 updatedTask.dueDate,
//                 updatedTask.description
//             );
            
//             // Replace the old element with the new one
//             parentContainer.replaceChild(newTaskElement, taskElement);
//         }
//     }
// }

// function capitalizeInput(input) {
//     input.value = input.value.toUpperCase();
// }

// // Utility function to help with date picker issues
// function openDatePicker(taskId) {
//     const dateInput = document.querySelector(`#dropdown-${taskId} .task-due-date-input`);
//     if (dateInput) {
//         // This trick helps in some browsers
//         const event = new MouseEvent('click', {
//             view: window,
//             bubbles: true,
//             cancelable: true
//         });
//         dateInput.dispatchEvent(event);
//     }
// }

// export {
//     addTask,
//     createTaskFromModal,
//     deleteTask,
//     confirmDeleteTask,
//     makeDescriptionEditable,
//     makeContentEditable,
//     saveContent,
//     saveDescription,
//     updateTaskStatus,
//     updateTaskPriority,
//     updateTaskDueDate,
//     capitalizeInput,
//     openDatePicker
// };

// // dragDrop.js - Handles drag and drop functionality
// import { updateTaskStatus } from './taskActions.js';

// //the default is to not allow items to be dropped
// //event.preventDefault(); prevents this default setting and allows tasks to be dropped into columns
// function allowDrop(event) {
//     event.preventDefault();
// }

// /** event.target.id: this retrieves the id of the element that is being dragged. 
//  * By using setData, the element's ID will be stored in the dataTransfer object 
//  * and can be retrieved during the drop event. */
// function drag(event) {
//     event.dataTransfer.setData("text/plain", event.target.id);
// }

// // allows dropping into a container
// function drop(event, columnId) {
//     event.preventDefault();

//     // get the dragged element's ID and find the element
//     const data = event.dataTransfer.getData("text/plain");
//     const draggedElement = document.getElementById(data);

//     if (draggedElement) {
//         // update task status based on the columnId
//         const taskStatus = columnId;
//         updateTaskStatus(data, taskStatus);

//         // use event.currentTarget to refer to the entire column (the one with the drop event listener)
//         const dropTarget = event.currentTarget;

//         // find the .task-container inside the dropTarget (the column)
//         const taskContainer = dropTarget.querySelector(".task-container");

//         // if the taskContainer exists, append the dragged element to it
//         if (taskContainer) {
//             taskContainer.appendChild(draggedElement);
//         }
//     }
// }

// export { allowDrop, drag, drop };

// // modal.js - Handles modal functionality for task creation
// import { tasks, updateLocalStorage } from './storage.js';
// import { renderTasks } from './taskRender.js';

// // sets up modal functionality
// function setupModalFunctionality() {
//     // creates the modal and its buttones
//     const taskModal = document.getElementById('taskModal');
//     const createTaskBtn = document.getElementById('createTaskBtn');
//     const closeModalBtn = document.querySelector('.close-modal');
//     const cancelTaskBtn = document.getElementById('cancelTaskBtn');
//     const saveTaskBtn = document.getElementById('saveTaskBtn');
    
//     // inputs from the user
//     const modalTaskInput = document.getElementById('modalTaskInput');
//     const modalDescriptionInput = document.getElementById('modalDescriptionInput');
//     const modalPriorityInput = document.getElementById('modalPriorityInput');
//     const modalDueDateInput = document.getElementById('modalDueDateInput');
    
//     // opens modal window
//     createTaskBtn.addEventListener('click', function() {
//         // clears all input values 
//         modalTaskInput.value = '';
//         modalDescriptionInput.value = '';
//         modalPriorityInput.value = 'medium';
//         modalDueDateInput.value = '';
        
//         // Display the modal
//         taskModal.style.display = 'block';
        
//         // Focus on the task name input
//         modalTaskInput.focus();
//     });
    
//     // Close the modal (X button)
//     closeModalBtn.addEventListener('click', function() {
//         taskModal.style.display = 'none';
//     });
    
//     // Close modal (Cancel button)
//     cancelTaskBtn.addEventListener('click', function() {
//         taskModal.style.display = 'none';
//     });
    
//     // Close modal when clicking outside
//     window.addEventListener('click', function(event) {
//         if (event.target === taskModal) {
//             taskModal.style.display = 'none';
//         }
//     });
    
//     // Save the task (Create Task button)
//     saveTaskBtn.addEventListener('click', function() {
//         const taskName = modalTaskInput.value.trim();
        
//         if (taskName !== '') {
//             // Create new task
//             createTaskFromModal();
//         } else {
//             // Highlight the input field if empty
//             modalTaskInput.classList.add('input-error');
            
//             // Remove the error class after animation
//             setTimeout(function() {
//                 modalTaskInput.classList.remove('input-error');
//             }, 500);
//         }
//     });
    
//     // Handle Enter key in the task name input
//     modalTaskInput.addEventListener('keydown', function(e) {
//         if (e.key === 'Enter') {
//             e.preventDefault();
            
//             const taskName = modalTaskInput.value.trim();
//             if (taskName !== '') {
//                 createTaskFromModal();
//             }
//         }
//     });
    
//     // Function to create task from modal inputs
//     function createTaskFromModal() {
//         const taskName = modalTaskInput.value.trim();
//         const description = modalDescriptionInput.value.trim();
//         const priority = modalPriorityInput.value;
//         const dueDate = modalDueDateInput.value;
        
//         // Create the new task
//         const newTask = {
//             id: "task-" + Date.now(),
//             content: taskName,
//             status: "to-do",
//             priority: priority,
//             dueDate: dueDate,
//             description: description
//         };
        
//         // Add to tasks array
//         tasks.push(newTask);
        
//         // Update localStorage and render
//         updateLocalStorage();
//         renderTasks();
        
//         // Close the modal
//         taskModal.style.display = 'none';
//     }
// }

// export { setupModalFunctionality };

// // main.js - Entry point for the application
// import { renderTasks } from './taskRender.js';
// import { addTask, deleteTask, confirmDeleteTask } from './taskActions.js';
// import { allowDrop, drag, drop } from './dragDrop.js';
// import { setupModalFunctionality } from './modal.js';

// // now in event 'DOMContentLoaded' it will render the tasks on the board
// // //when the page is loaded in the browser DOMContentLoaded occurs, and renderTasks is executed
// document.addEventListener('DOMContentLoaded', function() {
// //     // render any already existing tasks
//     renderTasks();
    
//     // set up modal functionality if modal exists in the DOM
//     if (document.getElementById('taskModal')) {
//         setupModalFunctionality();
//     }
// });

// window.addTask = addTask;
// window.allowDrop = allowDrop;
// window.drag = drag;
// window.drop = drop;
// //window.capitalizeInput = capitalizeInput;

