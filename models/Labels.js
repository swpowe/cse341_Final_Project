const mongoose = require('mongoose')

const labelSchema = new mongoose.Schema({
    labelName: { type: String, required: true },
})

module.exports = {
    model: mongoose.model('Labels', labelSchema),
    schema: labelSchema
}
