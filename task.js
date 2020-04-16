function createTaskObj(task, description, dueDateString, status, priority, notes) {
    this.task = task,
        this.description = description,
        this.dueDate = new Date(dueDateString),
        this.priority = priority,
        this.notes = notes
    this.status = status;
}
module.exports = { createTaskObj }