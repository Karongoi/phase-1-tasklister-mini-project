console.log("DEBUG: index.js is loaded!");

// Ensure script runs inside JSDOM
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("create-task-form");
    const taskList = document.getElementById("tasks");

    if (!form) {
        console.error("ERROR: Form element not found in DOM!");
        return;
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent page reload
        
        const taskInput = document.getElementById("new-task-description");
        const taskText = taskInput.value.trim();

        if (taskText !== "") { 
            const newTask = document.createElement("li");
            newTask.textContent = taskText;
            taskList.appendChild(newTask);
            console.log("DEBUG: Task added to DOM:", newTask.textContent);
        }

        form.reset(); // Clear input after submission
    });
});
