const express = require("express");
const userController = require("../controllers/user.controller");
const router = express.Router();

// **users**
router.get("/all-users", userController.getUsers);
router.get("/user/:id", userController.getUser);
router.post("/user", userController.createUser);
router.put("/user/:id", userController.modifyUser);
router.delete("/user/:id", userController.deleteUser);

module.exports = router;
