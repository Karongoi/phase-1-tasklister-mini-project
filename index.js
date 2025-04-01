describe('Handling form submission', () => {
    let form;
    let formInput;
    let taskList;
  
    beforeEach(() => {
      form = document.querySelector('#create-task-form');
      formInput = document.querySelector('#new-task-description');
      taskList = document.querySelector('#tasks');
    });
  
    it('should add a task to the task list when submitted', (done) => {
      // Simulate user input
      formInput.value = 'Wash the dishes';
  
      // Dispatch submit event
      form.dispatchEvent(new dom.window.Event('submit', { bubbles: true }));
  
      // Use setImmediate to wait for the DOM update asynchronously
      setImmediate(() => {
        // Ensure the LI gets added
        const task = taskList.querySelector("li");
        expect(task).to.not.be.null;
        expect(task.textContent).to.equal("Wash the dishes");
  
        done(); // Notify Mocha that the test is complete
      });
    });
  });
  