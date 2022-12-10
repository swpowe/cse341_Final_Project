const express = require("express")
const router = express.Router()
const labelsController = require("../controllers/labels.controller")

const {requiresAuth} = require('express-openid-connect');

router.get('/', requiresAuth(), labelsController.getLabels)
router.get('/:id', requiresAuth(), labelsController.getSingleLabel)
router.post('/', requiresAuth(), labelsController.createLabel)
router.put('/:id', requiresAuth(), labelsController.updateLabel)
router.delete('/:id', requiresAuth(), labelsController.deleteLabel)

module.exports = router;