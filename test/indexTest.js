const chai = require('chai');
global.expect = chai.expect;

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const babel = require('@babel/core');

// Load HTML content
const html = fs.readFileSync(path.resolve(__dirname, '..', 'src/index.html'), 'utf-8');

// Transform JavaScript using Babel
const { code: transformedScript } = babel.transformFileSync(
  path.resolve(__dirname, '..', 'src/index.js'),
  { presets: ['@babel/preset-env'] }
);

// Initialize JSDOM **with scripts execution enabled**
const dom = new JSDOM(html, {
  runScripts: "dangerously",
  resources: "usable"
});

// Inject JavaScript into JSDOM
const scriptElement = dom.window.document.createElement("script");
scriptElement.textContent = transformedScript;
dom.window.document.body.appendChild(scriptElement);

// Expose JSDOM globals
global.window = dom.window;
global.document = dom.window.document;
global.navigator = dom.window.navigator;
global.HTMLElement = dom.window.HTMLElement;
global.Node = dom.window.Node;
global.Text = dom.window.Text;
global.XMLHttpRequest = dom.window.XMLHttpRequest;

// ✅ Ensure script is manually loaded
require('../src/index.js');

console.log("DEBUG: Script Loaded!");

// 🧪 Test Suite
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
    console.log("DEBUG: Running test...");

    // Simulate user input
    formInput.value = 'Wash the dishes';

    // Dispatch submit event (use `bubbles: true` to properly simulate it)
    form.dispatchEvent(new dom.window.Event('submit', { bubbles: true }));

    // ✅ Wait for DOM update
    setTimeout(() => {
      console.log("DEBUG: Current task list content:", taskList.innerHTML);

      // 🚀 Fix: Ensure the LI gets added
      expect(taskList.querySelector("li").textContent).to.equal("Wash the dishes");
      done(); // Notify Mocha that the test is complete
    }, 100); 
  });
});
