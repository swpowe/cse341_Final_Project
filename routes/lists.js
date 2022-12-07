const express = require("express")
const router = express.Router()
const listsController = require("../controllers/list.controller")

router.get('/', listsController.getLists)
router.get('/:id', listsController.getSingleList)
router.post('/', listsController.createList)
router.put('/:id', listsController.updateList)
router.delete('/:id', listsController.deleteList)

// // **lists**
// router.get("/all-lists", todoController.getAllLists);

// router.get("/list/:id", todoController.getOneList);

// router.post("/list", todoController.createList);

// router.put("/list/:id", todoController.updateList);

// router.delete("/list/:id", todoController.deleteList);

// // **items**
// router.get("/all-items", todoController.getAllItems);

// router.get("/item/:id", todoController.getItem);

// router.get("/all-items-label/:id", todoController.getItemsByLabel);

// router.put("/item/:id", todoController.updateItem);

// router.delete("/item/:id", todoController.deleteItem);

// // **labels**
// router.get("/label/:id", todoController.getLabels);

// router.post("/label", todoController.addLabelToItem);

module.exports = router;
