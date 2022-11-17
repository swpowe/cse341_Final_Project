const mongoose = require('mongoose')

const listSchema = new mongoose.Schema({
    listName: { type: String, required: true },
})

// module.exports = {
//     model: mongoose.model('Lists', listSchema),
//     schema: listSchema
// }

const List = mongoose.model('List', listSchema);

module.exports = List;