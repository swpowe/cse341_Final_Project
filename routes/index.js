const express = require("express");
const { requiresAuth } = require("express-openid-connect");
const router = express.Router();

// controllers
const {
    createUser,
} = require('../controllers/user.controller');

const {
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
} = require('../controllers/todo.controller');


// req.isAuthenticated is provided from the auth router
router.get("/", (req, res) => {
  if (req.oidc.isAuthenticated()) {
    console.log(req.oidc.user);
    res.send(
      req.oidc.isAuthenticated() ? "Logged in but no callback 2?" : "Logged out"
    );
  }
});

router.get("/profile", requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
  return req.oidc.user;
});


// **users**
// GET /all-users

// GET /user/:id

// POST /user
router.get('/create-user', requiresAuth(), createUser);

// PUT /user/:id

// DELETE /delete-user/:id

// **lists**
// GET / all-lists

// GET /list/:id

// POST /list

// PUT /list/:id

// DELETE /list/:id

// **items**
// GET /all-items

// GET /item/:id

// GET /all-items-label/:id

// PUT /item/:id

// DELETE /item/:id

// **labels**
// PUT /label/:id

module.exports = router;
