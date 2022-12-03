const { default: mongoose } = require('mongoose');
const { ObjectId } = require('mongodb');

const Label = require('../models/Labels');
const List = require('../models/Lists');
const Todo = require('../models/Todos');

// **lists**
// GET / all-lists
const getAllLists = async (req, res) => {
    console.log('Get All Lists');

    const listArray = [];

    try {
        await mongoose.connect(process.env.MONGO_URI);
        for await (const list of List.find()) {
            listArray.push(JSON.stringify(list));
        }
        res.status(201).send(`<h1>Success! ${listArray}</h1>`)
    } catch (error) {
        console.log(`ERROR: ${error}`);
        res.status(400).send(`<h1>ERROR: ${error}</h1>`);
    }

};

// GET /list/:id
const getOneList = async (req, res) => {
    console.log('Get One List');

    const id = '6375a7e3de08e7bf40196a7f';

    try {
        await mongoose.connect(process.env.MONGO_URI);
        const list = await List.findOne({ _id: new ObjectId(id) });
        res.status(201).send(`<h1>Success! ${list}</h1>`);
    } catch (error) {
        console.log(`ERROR: ${error}`);
        res.status(400).send(`<h1>ERROR: ${error}</h1>`);
    }
};

// POST /list
const createList = async (req, res) => {
    //!! swap hard coded for req body
    console.log('Create List');

    // const list = {
    //     // listName: 'New List',
    // };

    try {
        await mongoose.connect(process.env.MONGO_URI);
        const resultList = await List.create(req.body.list);
        res.status(201).send(`<h1>Success! ${JSON.stringify(resultList)}</h1>`)
    } catch (error) {
        console.log(`ERROR: ${error}`);
        res.status(400).send(`<h1>ERROR: ${error}</h1>`);
    }
};

// PUT /list/:id
const updateList = async (req, res) => {
    try {
        const id = req.params.id;
        const list = await List.findByIdAndUpdate(id, req.body, { useFindAndModify: false });
        if (!list) {
            return res.status(404).send(`<h1>Cannot update list with id=${JSON.stringify(id)}</h1>`);
        } else {
            res.status(201).send(`<h1>Successfully Updated! ${JSON.stringify(list)}</h1>`)
        }
    } catch (error) {
        console.log(`ERROR: ${error}`);
        res.status(500).send(`<h1>ERROR: ${error}</h1>`);
    }
};

// DELETE /list/:id
const deleteList = async (req, res) => {
    try {
        const id = req.params.id;
        const removedList = await List.findByIdAndRemove(id);
        if (!removedList) {
            return res.status(404).send(`<h1>Cannot delete list with id=${JSON.stringify(id)}</h1>`);
        } else {
            res.status(201).send(`<h1>Successfully removed! ${JSON.stringify(removedList)}</h1>`)
        }
    } catch (error) {
        console.log(`ERROR: ${error}`);
        res.status(500).send(`<h1>ERROR: ${error}</h1>`);
    }
};

// **items**
// GET /all-items
const getAllItems = async (req, res) => {
    console.log('Get All Items');
};

// GET /item/:id
const getItem = async (req, res) => {
    console.log('Get One Item');
};

// GET /all-items-label/:id
const getItemsByLabel = async (req, res) => {
    console.log('Get Items By Label');
};

// PUT /item/:id
const updateItem = async (req, res) => {
    console.log('Update Item');
};

// DELETE /item/:id
const deleteItem = async (req, res) => {
    console.log('Delete Item');
};

// **labels**
// PUT /label/:id
const addLabelToItem = async (req, res) => {
    console.log('Add Label ToItem');
};

//GET /labels
const getLabels = async (req, res) => {
    console.log('Get Labels');
};

module.exports = {
    getAllLists,
    getOneList,
    createList,
    updateList,
    deleteList,
    getAllItems,
    getItem,
    getItemsByLabel,
    updateItem,
    deleteItem,
    addLabelToItem,
    getLabels
};

