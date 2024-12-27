
const newLabel=document.getElementById("new-task");
let addButton=document.getElementsByTagName("button")[0];
let addTodo=document.getElementById("incompleteTasks");
let completedTodo=document.getElementById("completed-tasks");
const changeButton = document.querySelector(".edit");

const list = {};

const createNewTaskElement = (taskString) => {
    let listItem = document.createElement("li");
    
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    
    let label = document.createElement("label");
    label.innerText = taskString;
    label.className = "task";
    
    let editInput = document.createElement("input");
    editInput.type = "text";
    editInput.className = "task";
    editInput.style.display = "none";
    
    let editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.className = "edit";
    
    let deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    let deleteImage = document.createElement("img");
    deleteImage.src = "./remove.svg";
    deleteButton.appendChild(deleteImage);
    
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    
    checkBox.addEventListener("change", () => {
        if (checkBox.checked) {
            completedTodo.appendChild(listItem);
        } else {
            addTodo.insertBefore(listItem, addTodo.firstChild);
        }
    });
    
    editButton.addEventListener("click", () => {
        if (listItem.classList.contains("editMode")) {
            label.innerText = editInput.value;
            editButton.innerText = "Edit";
            editInput.style.display = "none";
            label.style.display = "block";
        } else {
            editInput.value = label.innerText;
            editButton.innerText = "Save";
            editInput.style.display = "block";
            label.style.display = "none";
        }
        listItem.classList.toggle("editMode");
    });

    deleteButton.addEventListener("click", () => {
        listItem.remove();
    });

    return listItem;
};

const addTask = (event) => {
    event.preventDefault();
    let taskString = newLabel.value;
    newLabel.value = "";
    if (taskString) {
        let listItem = createNewTaskElement(taskString);
        addTodo.insertBefore(listItem, addTodo.firstChild);
        list[taskString] = false; 
        newLabel.value = ""; 
    }
};
 
addButton.addEventListener("click", addTask);

