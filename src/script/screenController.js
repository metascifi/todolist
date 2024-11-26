import { displayAddTaskForm } from "./domElements/displayAddTaskForm.js";
import { displayAddProjectForm } from "./domElements/displayAddProjectForm.js";
import { projects, Task, Project } from "./core.js";

export function screenController() {
    const addTaskButton = document.querySelector(".add-task-button");
    const addProjectButton = document.querySelector(".projects-list-name .icon-container")

    addTaskButton.addEventListener("click", () => {
        displayAddTaskForm(); 
        const addTaskButton = document.querySelector(".add-task-form .action-buttons button:last-child"); 
        if (document.querySelector(".pick-project-dropdown") !== null) {
            const dropdown = document.querySelector(".pick-project-dropdown");
            dropdown.addEventListener("click", () => {
                displayPickProjectDropdown();
            })
        }
        
        

        addTaskButton.addEventListener("click", () => {
            Project.addTask(new Task(nameField.value, "18/02/2003", "Critical"));
        })     


        if (document.querySelector(".add-project-button") !== null) {
        const addProjectBtn = document.querySelector(".add-project-button");
        addProjectBtn.addEventListener("click", () => {
              displayAddProjectForm();
              const addProjectBtn = document.querySelector(".addProject-button");
              addProjectBtn.addEventListener("click", () => {
                let nameField = document.querySelector(".project-name-field");
                let project = new Project(nameField.value);
                projects.push(project);
                displayAddTaskForm();
                console.log(projects);
              })
            })
        }
    });

    addProjectButton.addEventListener("click", () => {
        displayAddProjectForm();
    })
} 
