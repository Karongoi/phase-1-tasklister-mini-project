console.log("DEBUG: index.js is loaded!");

const form = document.getElementById("create-task-form");
const taskList = document.getElementById("tasks");

if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent page reload
        
        const taskInput = document.getElementById("new-task-description").value;
        
        if (taskInput.trim() !== "") { 
            const newTask = document.createElement("li");
            newTask.textContent = taskInput;
            taskList.appendChild(newTask);
        }

        form.reset(); // Clear input after submission
        console.log("DEBUG: Task added to DOM:", taskInput);
    });
} else {
    console.error("ERROR: Form element not found!");
}
