// **lists**
// GET / all-lists
const getAllLists = async (req, res) => {
    console.log('Get All Lists');
};

// GET /list/:id
const getOnelList = async (req, res) => {
    console.log('Get One List');
};

// POST /list
const createList = async (req, res) => {
    console.log('Create List');
};

// PUT /list/:id
const updateList = async (req, res) => {
    console.log('Update List');
};

// DELETE /list/:id
const deleteList = async (req, res) => {
    console.log('Delete List');
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
    getOnelList,
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

