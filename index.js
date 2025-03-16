document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("create-task-form");
    const taskList = document.getElementById("tasks");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent page reload

            const taskInput = document.getElementById("new-task-description");

            if (taskInput.value.trim() !== "") {
                const newTask = document.createElement("li");
                newTask.textContent = taskInput.value.trim(); // Ensure proper text insertion
                taskList.appendChild(newTask); // Append task to the list
            }

            taskInput.value = ""; // Clear input after submission
        });
    }
});
