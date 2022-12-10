const express = require("express")
const router = express.Router()
const listsController = require("../controllers/lists.controller")

const {requiresAuth} = require('express-openid-connect');

router.get('/', requiresAuth(), listsController.getLists)
router.get('/:id', requiresAuth(), listsController.getSingleList)
router.post('/', requiresAuth(), listsController.createList)
router.put('/:id', requiresAuth(), listsController.updateList)
router.delete('/:id', requiresAuth(), listsController.deleteList)

module.exports = router;
