const mongoose = require('mongoose')
const list = require('./Lists')
const label = require('./Labels')

const todoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    priority: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    completed: { type: Boolean, default: false },
    assignedTo: { type: String, },
    label: [labelSchema],
    list: [list.schema],
})

module.exports = mongoose.model('Todos', todoSchema)