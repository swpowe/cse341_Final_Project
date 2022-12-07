const express = require("express")
const router = express.Router()
const todosController = require("../controllers/todos.controller")

router.get('/', todosController.getTodos)
router.get('/:id', todosController.getSingleTodo)
router.post('/', todosController.createTodo)
router.put('/:id', todosController.updateTodo)
router.delete('/:id', todosController.deleteTodo)

module.exports = router;