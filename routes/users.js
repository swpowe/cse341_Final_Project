const express = require("express");

const userController = require("../controllers/user.controller");

const router = express.Router();

// **users**
router.get("/all-users", userController.getAllUsers);

router.get("/user/:id", userController.getUser);

router.post("/user", userController.creatUser);

router.put("/user/:id", userController.updateUser);

router.delete("/user/:id", userController.deleteUser);
