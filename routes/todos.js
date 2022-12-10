const express = require("express")
const router = express.Router()
const todosController = require("../controllers/todos.controller")

const {requiresAuth} = require('express-openid-connect');

router.get('/', requiresAuth(), todosController.getTodos)
router.get('/:id', requiresAuth(), todosController.getSingleTodo)
router.post('/', requiresAuth(), todosController.createTodo)
router.put('/:id', requiresAuth(), todosController.updateTodo)
router.delete('/:id', requiresAuth(), todosController.deleteTodo)

module.exports = router;