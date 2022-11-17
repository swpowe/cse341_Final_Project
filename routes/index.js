const express = require("express");
const { requiresAuth } = require("express-openid-connect");
const router = express.Router();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-output.json');

// controllers
const {
    createUser,
} = require('../controllers/user.controller');

const {
  getAllLists,
  getOneList,
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

// swagger docs
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

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
router.get('/all-lists', getAllLists); //!! Need to require Auth()

// GET /list/:id
router.get('/list', getOneList);

// POST /list
router.post('/create-list', createList); //!! Need to require Auth()

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
