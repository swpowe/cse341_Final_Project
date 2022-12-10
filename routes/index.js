const express = require("express");
const { requiresAuth } = require("express-openid-connect");
const router = express.Router();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-output.json');

// controllers
const {
  createUser,
  getUsers,
  getUser,
  modifyUser,
  deleteUser
} = require('../controllers/user.controller');

// req.isAuthenticated is provided from the auth router
router.get('/', (req, res) => {
  if (req.oidc.isAuthenticated()) {
    console.log(req.body);
    res.send('<h1>User successfully logged in.</h1>');
  }
  res.redirect('/login');
});

router.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

// swagger docs
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

// Require endpoints
router.use('/lists', require('./lists'))
router.use('/labels', require('./labels'))
router.use('/todos', require('./todos'))

module.exports = router;
