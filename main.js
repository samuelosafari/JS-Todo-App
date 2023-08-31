let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let msg = document.getElementById("msg");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");

//for dealing with the submit button
form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

//a function to deal with form validation

let formValidation = () => {
  if (textInput.value === "") {
    console.log("failure");
    msg.innerHTML = "Task cannot be blank.";
  } else {
    console.log("success");
    msg.innerHTML = "";
    acceptData();
    add.setAttribute("data-bs-dismiss", "modal");
    add.click();

    (() => {
      add.setAttribute("data-bs-dismiss", "");
    })();
  }
};

//for storing and accepting the data

let data = {};

let acceptData = () => {
  data["text"] = textInput.value;
  data["date"] = dateInput.value;
  data["description"] = textarea.value;

  createTasks();
};

//now to upload the task on the screen functionality

let createTasks = () => {
  tasks.innerHTML += `
  <div>
          <span class="fw-bold">${data.text}</span>
          <span class="small text-secondary">${data.date}</span>
          <p>${data.description}</p>
          <span class="options">
            <i onClick = "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="bx bxs-edit"></i>
            <i onClick = "deleteTask(this)" class="bx bx-trash"></i>
          </span>
        </div>
  `;
  resetForm();
};

//deleting a task

let deleteTask = (e) => {
  e.parentElement.parentElement.remove();
};

//editing a task

let editTask = (e) => {
  let selectedTask = e.parentElement.parentElement;

  textInput.value = selectedTask.children[0].innerHTML;
  dateInput.value = selectedTask.children[1].innerHTML;
  textarea.value = selectedTask.children[2].innerHTML;

  //   selectedTask.remove();
};

//reseting the form

let resetForm = () => {
  textInput.value = "";
  dateInput.value = "";
  textarea.value = "";
};
