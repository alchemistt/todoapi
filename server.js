const dao = require('./dao')
const express = require('express')
const dataBase = require('./writedb')
const server = express()
const _ = require('lodash')
server.use(express.urlencoded({ extended: true }))


server.use(express.json());
server.use("/", express.static(__dirname + '/public'))
server.post('/todos', function(req, res) {
    // if (typeof req.body.task !== 'string') { //     return res.status(400).send({ error: 'Task name not provided' })// }// const task = JSON.parse(req.body)// dao.addTask('asdfhklasdf', 'description', '2001-12-1', "high", "note nhai hai ek bhi");
    // const user = JSON.parse(req.body)

    //console.log(req.body)
    try {
        const obj = JSON.parse(JSON.stringify(req.body));
        console.log(obj.id);
        console.log("obh",
            obj.notes);
        dao.addTask(obj.task, obj.description, obj.dueDate, obj.status, obj.priority, obj.notes);
        res.send(req.body)

    } catch (error) {
        console.log(error);
        res.send('err')

    }


})
server.get('/todos/notes', function(req, res, next) {
    console.error("---------------------------")
        //k = dao.findTaskById(1);
        //dataBase.todo.findAll();
    dataBase.todo.findAll({ attributes: ['notes'] }).then(task => {
        k = task;
        console.log("alkfjas");

        res.send(task)
            //return task;

    });
})
server.get('/todos/:id', function(req, res, next) {
    dataBase.todo.findOne({
            where: { id: req.params.id },
        })
        .then(
            todo => {

                res.send(todo)
            })
})

server.post('/todos/:id/notes', function(req, res) {

    try {
        const obj = JSON.parse(JSON.stringify(req.body));
        console.log(obj.id);

        dao.addTask()
        res.send(req.body)

    } catch (error) {
        console.log(error);
        res.send('err')

    }


})

server.get('/todos', function(req, res, next) {
    console.error("---------------------------")
        //k = dao.findTaskById(1);
        //dataBase.todo.findAll();
    dataBase.todo.findAll().then(task => {
        k = task;
        res.send(task)
            //return task;

    });
})



server.get('/todos/:id/notes', function(req, res, next) {
    dataBase.todo.findOne({
            where: { id: req.params.id },
            attributes: ['notes']
        })
        .then(
            todo => {

                res.send(todo)
            })
})


server.patch('/todos/:id', function(req, res, next) {
    console.log("klasf")
    id = req.params.id
    var body = _.pick(req.body, ['notes']).notes
    console.log(body);
    if (body != "") {
        //dao.updateTask(id, body)
        dao.updateTask(id, body)
        res.send().status(200)

    }
    res.send().status(404)



})




server.listen(3232);