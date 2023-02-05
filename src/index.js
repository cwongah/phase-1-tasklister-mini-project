const newTaskDescription = document.querySelector("#new-task-description")
const taskList = document.querySelector("#tasks")

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault()
    createTask(newTaskDescription)
  })
});

function createTask(todo){
  let newTask = document.createElement("li")
  newTask.innerText = `${todo.value} `
  createButton(newTask)
  taskList.appendChild(newTask)
}

function createButton(task){
  let taskButton = document.createElement("button")
  taskButton.innerText = "x"
  task.appendChild(taskButton)
  taskButton.addEventListener("click", (e) => deleteTask(e))
}

function deleteTask(e){
  const selectedTask = e.target.parentElement
  taskList.removeChild(selectedTask)
}