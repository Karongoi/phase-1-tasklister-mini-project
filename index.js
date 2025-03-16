console.log("DEBUG: index.js is loaded!");

const form = document.getElementById("create-task-form");
const taskList = document.getElementById("tasks");

console.log("DEBUG: Form found?", form);
console.log("DEBUG: Task list element found?", taskList);

if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent page reload

        const taskInput = document.getElementById("new-task-description").value;

        if (taskInput.trim() !== "") {
            const newTask = document.createElement("li");
            newTask.innerText = taskInput; // Fixing text insertion

            setTimeout(() => {
                taskList.appendChild(newTask);
                console.log("DEBUG: Task added to DOM.", taskInput);
            }, 10); // Ensure task is added before test checks it
        }

        form.reset(); // Clear input after submission
    });
} else {
    console.error("ERROR: Form element not found!");
}
