const sequelize = require("sequelize")

const db = new sequelize({
    dialect: 'sqlite',
    storage: __dirname + '/todo.db'
})

const todo = db.define('todo', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },
    task: {
        type: sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize.STRING,
        allowNull: false,
    },
    dueDate: {
        type: sequelize.DATE,
        allowNull: false,
    },
    status: {
        type: sequelize.STRING,
        allowNull: false,
        defaultValue: "0",
    },
    priority: {
        type: sequelize.STRING,
        allowNull: false,
    },
    notes: {
        type: sequelize.STRING,

    },



})
let task = {
    task: "assignment",
    description: "naukri ka sawal",
    dueDate: new Date('2020-02-25'),
    priority: 'high',
    notes: ';alkjf'



}


// db.sync({})
//     .then(() => { todo.create(task) })
//     .error((err) => { console.log(err) })

module.exports = { todo, db }