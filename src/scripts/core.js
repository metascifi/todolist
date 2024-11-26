let projects = [];


export class Task {
    constructor(name, dueToDate, priority, project) {
        this.name = name;
        this.dueToDate = dueToDate;
        this.priority = priority;
        this.project = project;
    }
}

export class Project {
    constructor(name, taskList = []) {
        this.name = name;
        this.taskList = taskList;
    }

    addTask(task) {
        this.taskList.push(task);
    }
}

export {projects};