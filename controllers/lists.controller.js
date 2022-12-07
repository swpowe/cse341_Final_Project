const Lists = require('../models/Lists')

// @desc    GET lists
// @route   GET /lists
const getLists = async (req, res) => {
    try {
        const lists = await Lists.model.find();
        res.status(200).json(lists);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }

}

// @desc    GET list
// @route   GET /lists/:id
const getSingleList = async (req, res) => {
    try {
        const list = await Lists.model.findById(req.params.id);
        if (list == null) {
            return res.status(404).json({ message: "List with specified ID Not Found!" })
        }
        res.status(200).json(list);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

// @desc    CREATE lists
// @route   POST /lists
const createList = async (req, res) => {
    try {
        const list = new Lists.model({
            list: req.body.list
        });
        const savedList = await list.save();
        return res.status(201).json(savedList._id);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

// @desc    UPDATE list
// @route   PUT /lists/:id
const updateList = async (req, res) => {
    try {
        const id = req.params.id;
        const list = await Lists.model.findByIdAndUpdate(id, req.body, { useFindAndModify: false });
        if (!list) {
            return res.status(404).send({ message: `Cannot update list with id=${id}` });
        } else {
            res.status(204).send({ message: 'List has been successfully updated.' });
        }
    } catch (e) {
        res.status(500).send({ message: e.message })
    }
}

// @desc    DELETE list
// @route   DELETE /lists/:id
const deleteList = async (req, res) => {
    try {
        const id = req.params.id;
        const removedList = await Lists.model.findByIdAndRemove(id);
        if (!removedList) {
            res.status(404).send({ message: `Cannot delete list with id=${id}` });
        } else {
            res.status(200).send({ message: 'List was deleted successfully.' })
        }
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
}

module.exports = {
    getLists,
    getSingleList,
    createList,
    updateList,
    deleteList,
};