const mongoose = require('mongoose')
const list = require('./Lists')
const label = require('./Labels')

const todoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    priority: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    completed: { type: Boolean, default: false },
    assignedTo: { type: String, },
    label: [label.schema],
    list: [list.schema],
})

module.exports = mongoose.model('Todos', todoSchema)