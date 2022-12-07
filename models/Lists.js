const mongoose = require('mongoose')

const listSchema = new mongoose.Schema({
    list: { type: Array, required: true },
})

module.exports = {
    model: mongoose.model('Lists', listSchema),
    schema: listSchema
}

// const List = mongoose.model('List', listSchema);

// module.exports = List;