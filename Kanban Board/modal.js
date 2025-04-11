// modal.js - Handles modal functionality for task creation
import { tasks, updateLocalStorage } from './storage.js';
import { renderTasks } from './taskRender.js';

// sets up modal functionality
function setupModalFunctionality() {
    // creates the modal and its buttones
    const taskModal = document.getElementById('taskModal');
    const createTaskBtn = document.getElementById('createTaskBtn');
    const closeModalBtn = document.querySelector('.close-modal');
    const cancelTaskBtn = document.getElementById('cancelTaskBtn');
    const saveTaskBtn = document.getElementById('saveTaskBtn');
    
    // inputs from the user
    const modalTaskInput = document.getElementById('modalTaskInput');
    const modalDescriptionInput = document.getElementById('modalDescriptionInput');
    const modalPriorityInput = document.getElementById('modalPriorityInput');
    const modalDueDateInput = document.getElementById('modalDueDateInput');
    
    // opens modal window
    createTaskBtn.addEventListener('click', function() {
        // clears all input values 
        modalTaskInput.value = '';
        modalDescriptionInput.value = '';
        modalPriorityInput.value = 'medium';
        modalDueDateInput.value = '';
        
        // Display the modal
        taskModal.style.display = 'block';
        
        // Focus on the task name input
        modalTaskInput.focus();
    });
    
    // Close the modal (X button)
    closeModalBtn.addEventListener('click', function() {
        taskModal.style.display = 'none';
    });
    
    // Close modal (Cancel button)
    cancelTaskBtn.addEventListener('click', function() {
        taskModal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === taskModal) {
            taskModal.style.display = 'none';
        }
    });
    
    // Save the task (Create Task button)
    saveTaskBtn.addEventListener('click', function() {
        const taskName = modalTaskInput.value.trim();
        
        if (taskName !== '') {
            // Create new task
            createTaskFromModal();
        } else {
            // Highlight the input field if empty
            modalTaskInput.classList.add('input-error');
            
            // Remove the error class after animation
            setTimeout(function() {
                modalTaskInput.classList.remove('input-error');
            }, 500);
        }
    });
    
    // Handle Enter key in the task name input
    modalTaskInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            
            const taskName = modalTaskInput.value.trim();
            if (taskName !== '') {
                createTaskFromModal();
            }
        }
    });
    
    // Function to create task from modal inputs
    function createTaskFromModal() {
        const taskName = modalTaskInput.value.trim();
        const description = modalDescriptionInput.value.trim();
        const priority = modalPriorityInput.value;
        const dueDate = modalDueDateInput.value;
        
        // Create the new task
        const newTask = {
            id: "task-" + Date.now(),
            content: taskName,
            status: "to-do",
            priority: priority,
            dueDate: dueDate,
            description: description
        };
        
        // Add to tasks array
        tasks.push(newTask);
        
        // Update localStorage and render
        updateLocalStorage();
        renderTasks();
        
        // Close the modal
        taskModal.style.display = 'none';
    }
}

export { setupModalFunctionality };