const express = require("express");
const { requiresAuth } = require("express-openid-connect");
const router = express.Router();

// req.isAuthenticated is provided from the auth router
router.get("/", (req, res) => {
  if (req.oidc.isAuthenticated()) {
    res.send(
      req.oidc.isAuthenticated() ? "Logged in but no callback 2?" : "Logged out"
    );
  }
});

router.get("/profile", requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});


// **users**
// GET /all-users

// GET /user/:id

// POST /user

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
