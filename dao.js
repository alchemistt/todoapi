const taskObj = require('./task')
const dataBase = require('./writedb')

function addTask(task, description, dueDateString, status, priority, notes) {
    console.log("++++++" + notes)
    let newTask = new taskObj.createTaskObj(task, description, dueDateString, status, priority, notes);
    console.log("-----" + newTask.notes);

    dataBase.db.sync({})
        .then(() => { dataBase.todo.create(newTask) })
        .error((err) => { console.log(err) })


}

function findTaskById(id) {
    dataBase.todo.findOne({ where: { id: id } })
        .then(
            todo => {
                return (todo);
            }

        )


}
// const list = await dataBase.todo.findAll({
//         attributes: ["id", 'task', 'description', 'dueDate', 'status', 'notes'],
//     })
//     // console.log(list)
// return (list)











async function findAllTask() {
    await dataBase.db.sync()
    let result = await dataBase.todo.findAll({
        attributes: ["id", 'task', 'description', 'dueDate', 'status', 'notes'],
    }).then((task) => {


    })
    console.log(result);

}


// function dataPrint() {
//     return (task);
//     // console.log(t)
//     findAllTask()
// }





function deleteTaskById(id) {
    dataBase.todo.destroy({ where: { id: id } })
        .then(
            todo => {
                if (todo == 1) {
                    console.log("delete");

                } else console.log("undelete");

            }


        )


}

function updateTaskById(id, updates) {
    dataBase.todo.findOne({ where: { id: id } }).then((task) => {
        console.log(task.id);
        task.update({ description: 'newdis' });
    })


}

function updateTask(id, newNote) {

    dataBase.todo.findOne({ where: { id: id } }).then((task) => {
        console.log(task.id);
        var updatedNote = task.notes + " | " + newNote
        task.update({ notes: updatedNote });
    })
}

//updateTask(12, "skdjf;adf")
//findTaskById(14)
//deleteTaskById(14)
// updateTaskById(13, { description: 'newdis' })
//addTask('asdfhklasdf', 'description', '2001-12-1', "high", "note nhai hai ek bhi");modmdo



// module.exports = { findTaskById, updateTaskById, deleteTaskById, addTask }
module.exports = { findTaskById, updateTaskById, deleteTaskById, addTask, updateTask }