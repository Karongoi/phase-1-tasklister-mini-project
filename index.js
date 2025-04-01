document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("create-task-form");  // The form
    const taskInput = document.getElementById("new-task-description");  // The input field
    const taskList = document.getElementById("tasks");  // The ul where tasks will appear
  
    // Event listener for form submission
    taskForm.addEventListener("submit", function(event) {
      event.preventDefault();  // Prevents the default form submission
  
      const newTask = taskInput.value.trim();  // Get the value from input field
  
      if (newTask) {
        // Create a new li element for the task
        const li = document.createElement("li");
        li.textContent = newTask;
  
        // Optionally, add a delete button to each task
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
          li.remove();  // Removes the task when clicked
        });
        li.appendChild(deleteButton);
  
        // Append the new task to the list
        taskList.appendChild(li);
  
        // Clear the input field after submitting
        taskInput.value = "";
      }
    });
  });
  