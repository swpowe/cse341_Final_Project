const express = require("express")
const router = express.Router()
const labelsController = require("../controllers/label.controller")

router.get('/', labelsController.getLabels)
router.get('/:id', labelsController.getSingleLabel)
router.post('/', labelsController.createLabel)
router.put('/:id', labelsController.updateLabel)
router.delete('/:id', labelsController.deleteLabel)

module.exports = router;