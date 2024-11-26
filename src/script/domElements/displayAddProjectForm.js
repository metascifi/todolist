export function displayAddProjectForm() {
    if (document.querySelector(".form") !== null) {
        let oldContainer = document.querySelector(".form");
        oldContainer.remove();
    }

    const iconsPath = require.context('./../../images/add-project-form', true, /\.(png|svg|jpg|jpeg|gif)$/i);
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

    const addProjectForm = document.createElement("div");
    const form = document.createElement("form");
    const fieldSet = document.createElement("fieldset");
    const nameField = document.createElement("input");
    const colorField = document.createElement("div");
    const colorFieldText = document.createElement("p");
    const colorFieldIconContainer = document.createElement("div");
    const colorFieldIcon = document.createElement("img");
    const actionButtons = document.createElement("div");
    const actionBtnCancel = document.createElement("button");
    const actionBtnAddProject = document.createElement("button");
    
    
    addProjectForm.classList.add("add-project-form", "form");
    nameField.classList.add("project-name-field");
    colorField.classList.add("color-field");
    colorFieldIconContainer.classList.add("icon-container");
    actionButtons.classList.add("action-buttons");

    nameField.setAttribute("placeholder", "Enter project name");
    colorFieldText.textContent = "Color";
    colorFieldIcon.src = getImage("./dropdown-arrow.svg");
    actionBtnCancel.textContent = "Cancel";
    actionBtnAddProject.textContent = "Add project";
    actionBtnAddProject.setAttribute("type", "button")
    actionBtnAddProject.classList.add("addProject-button")

    mainSection.appendChild(addProjectForm);
    addProjectForm.appendChild(form);
    form.appendChild(fieldSet);
    fieldSet.appendChild(nameField);
    fieldSet.appendChild(colorField);
    colorField.appendChild(colorFieldText);
    colorField.appendChild(colorFieldIconContainer);
    colorFieldIconContainer.appendChild(colorFieldIcon);
    form.appendChild(actionButtons);
    actionButtons.appendChild(actionBtnCancel);
    actionButtons.appendChild(actionBtnAddProject);
}