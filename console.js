console.log("Hello World");
// To-Do List Application

let todoList = [];

// Function to display the to-do list
function displayTasks() {
  console.clear();
  if (todoList.length === 0) {
    console.log("Your to-do list is empty.");
  } else {
    console.log("Your To-Do List:");
    todoList.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  }
}

// Function to add a task to the to-do list
function addTask() {
  let task = prompt("Enter a new task:");
  if (task) {
    todoList.push(task);
    console.log(`Task added: "${task}"`);
  } else {
    console.log("You must enter a task.");
  }
  displayTasks();
}

// Function to remove a task from the to-do list
function removeTask() {
  let taskNumber = prompt("Enter the task number you want to remove:");
  taskNumber = parseInt(taskNumber);

  if (taskNumber && taskNumber <= todoList.length && taskNumber > 0) {
    let removedTask = todoList.splice(taskNumber - 1, 1);
    console.log(`Task removed: "${removedTask}"`);
  } else {
    console.log("Invalid task number.");
  }
  displayTasks();
}

// Function to show the menu options
function showMenu() {
  let choice = prompt("To-Do List Menu:\n1. View Tasks\n2. Add Task\n3. Remove Task\n4. Exit\nEnter your choice:");

  switch (choice) {
    case "1":
      displayTasks();
      break;
    case "2":
      addTask();
      break;
    case "3":
      removeTask();
      break;
    case "4":
      console.log("Exiting the To-Do List application. Goodbye!");
      break;
    default:
      console.log("Invalid choice. Please try again.");
      break;
  }

  if (choice !== "4") {
    showMenu(); // Show menu again after each action
  }
}

// Start the To-Do List app
showMenu();
