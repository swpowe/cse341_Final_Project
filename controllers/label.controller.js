const Labels = require('../models/Labels')

// @desc    GET labels
// @route   GET /labels
const getLabels = async (req, res) => {
    try {
        const labels = await Labels.model.find();
        res.status(200).json(labels);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }

}

// @desc    GET label
// @route   GET /labels/:id
const getSingleLabel = async (req, res) => {
    try {
        const label = await Labels.model.findById(req.params.id);
        if (label == null) {
            return res.status(404).json({ message: "Label with specified ID Not Found!" })
        }
        res.status(200).json(label);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

// @desc    CREATE labels
// @route   POST /labels
const createLabel = async (req, res) => {
    try {
        const label = new Labels.model({
            labelName: req.body.labelName
        });
        const savedLabel = await label.save();
        return res.status(201).json(savedLabel._id);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

// @desc    UPDATE label
// @route   PUT /labels/:id
const updateLabel = async (req, res) => {
    try {
        const id = req.params.id;
        const label = await Labels.model.findByIdAndUpdate(id, req.body, { useFindAndModify: false });
        if (!label) {
            return res.status(404).send({ message: `Cannot update label with id=${id}` });
        } else {
            res.status(204).send({ message: 'Label has been successfully updated.' });
        }
    } catch (e) {
        res.status(500).send({ message: e.message })
    }
}

// @desc    DELETE label
// @route   DELETE /labels/:id
const deleteLabel = async (req, res) => {
    try {
        const id = req.params.id;
        const removedLabel = await Labels.model.findByIdAndRemove(id);
        if (!removedLabel) {
            res.status(404).send({ message: `Cannot delete label with id=${id}` });
        } else {
            res.status(200).send({ message: 'Label was deleted successfully.' })
        }
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
}

module.exports = {
    getLabels,
    getSingleLabel,
    createLabel,
    updateLabel,
    deleteLabel,
};