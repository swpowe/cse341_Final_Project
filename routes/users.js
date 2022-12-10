const express = require("express");
const userController = require("../controllers/user.controller");
const router = express.Router();

const {requiresAuth} = require('express-openid-connect');

// **users**
router.get("/all-users", requiresAuth(), userController.getUsers);
router.get("/user/:id", requiresAuth(), userController.getUser);
router.post("/user", requiresAuth(), userController.createUser);
router.put("/user/:id", requiresAuth(), userController.modifyUser);
router.delete("/user/:id", requiresAuth(), userController.deleteUser);

module.exports = router;
