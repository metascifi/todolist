import { projects as projectsList } from "../core.js";

export function displayAddTaskForm() {
    if (document.querySelector(".form") !== null) {
        let oldContainer = document.querySelector(".form");
        oldContainer.remove();
    }

    const iconsPath = require.context('./../../images/add-task-form', true, /\.(png|svg|jpg|jpeg|gif)$/i);
    const iconImages = iconsPath.keys();
    const iconImagesProcessed = iconsPath.keys().map(iconsPath); 


    function getImage (name) {
        for (let i = 0; i < iconImages.length; i++) {
            if (iconImages[i] === name) {
                return iconImagesProcessed[i];
            }
        }
    } 

    const mainSection = document.querySelector("main");

    const addTaskForm = document.createElement("div");
    const form = document.createElement("form");
    const formFields = document.createElement("div");
    const nameField = document.createElement("input");
    const additionalFields = document.createElement("fieldset");
    const dateField = document.createElement("div");
    const dateFieldIconContainer = document.createElement("div");
    const dateFieldIcon = document.createElement("img");
    const dateFieldParagraph = document.createElement("p");
    const priorityField = document.createElement("div");
    const priorityFieldParagraph = document.createElement("p");
    const priorityFieldIconContainer = document.createElement("div");
    const priorityFieldIcon = document.createElement("img");    
    const bottomSection = document.createElement("div");
    const addProjectButton = document.createElement("div");
    const addProjectButtonText = document.createElement("p");
    const addProjectButtonIcContainer = document.createElement("div");
    const addProjectButtonIcon = document.createElement("img");
    const projectsDropdown = document.createElement("div");
    const projectsDropdownText = document.createElement("p");
    const projectsDropdownIconContainer = document.createElement("div");
    const projectsDropdownIcon = document.createElement("img");
    const actionButtons = document.createElement("div");
    const actionBtnCancel = document.createElement("button");
    const actionBtnAddTask = document.createElement("button");
    

    form.setAttribute("action", "string");
    nameField.setAttribute("type", "text");
    nameField.setAttribute("placeholder", "Enter task name");
    dateFieldIcon.src = getImage("./dueto.svg");
    priorityFieldIcon.src = getImage("./dropdown-arrow.svg");
    projectsDropdownText.textContent = "Home";
    addProjectButtonIcon.src = getImage("./add-task-icon.svg");
    projectsDropdownIcon.src = getImage("./dropdown-project-arrow.svg");


    addTaskForm.classList.add("add-task-form", "form");
    formFields.classList.add("form-fields"); 
    nameField.classList.add("name-field");
    additionalFields.classList.add("additional-fields");
    dateField.classList.add("date-field");
    dateFieldIconContainer.classList.add("icon-container");
    priorityField.classList.add("priority-field");
    priorityFieldIconContainer.classList.add("icon-container");
    bottomSection.classList.add("bottom-section");
    addProjectButton.classList.add("add-project-button");
    addProjectButtonIcContainer.classList.add("icon-container");
    projectsDropdown.classList.add("pick-project-dropdown");
    projectsDropdownIconContainer.classList.add("icon-container");
    actionButtons.classList.add("action-buttons");


    dateFieldParagraph.textContent = "Due to";
    priorityFieldParagraph.textContent = "Priority";
    addProjectButtonText.textContent = "Add project";
    actionBtnCancel.textContent = "Cancel";
    actionBtnAddTask.textContent = "Add task";

    mainSection.appendChild(addTaskForm);
    addTaskForm.appendChild(form);
    form.appendChild(formFields);
    formFields.appendChild(nameField);
    formFields.appendChild(additionalFields);
    additionalFields.appendChild(dateField);
    dateField.appendChild(dateFieldIconContainer);
    dateFieldIconContainer.appendChild(dateFieldIcon);
    dateField.appendChild(dateFieldParagraph);
    additionalFields.appendChild(priorityField);
    priorityField.appendChild(priorityFieldParagraph);
    priorityField.appendChild(priorityFieldIconContainer);
    priorityFieldIconContainer.appendChild(priorityFieldIcon);
    form.appendChild(bottomSection);
    if (projectsList[0] === undefined) {
        bottomSection.appendChild(addProjectButton);
        addProjectButton.appendChild(addProjectButtonText);
        addProjectButton.appendChild(addProjectButtonIcContainer);
        addProjectButtonIcContainer.appendChild(addProjectButtonIcon);
    } else { 
        bottomSection.appendChild(projectsDropdown);
        projectsDropdown.appendChild(projectsDropdownText);
        projectsDropdown.appendChild(projectsDropdownIconContainer);
        projectsDropdownIconContainer.appendChild(projectsDropdownIcon);
    }
    bottomSection.appendChild(actionButtons);
    actionButtons.appendChild(actionBtnCancel);
    actionButtons.appendChild(actionBtnAddTask);
}