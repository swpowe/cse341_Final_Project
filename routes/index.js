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

// swagger docs
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

// Require endpoints
router.use('/lists', require('./lists'))
router.use('/labels', require('./labels'))


// const {
//   getAllLists,
//   getOneList,
//   createList,
//   updateList,
//   deleteList,
// } = require('../controllers/todo.controller');


// // req.isAuthenticated is provided from the auth router
// router.get("/", (req, res) => {
//   if (req.oidc.isAuthenticated()) {
//     console.log(req.oidc.user);
//     res.send(
//       req.oidc.isAuthenticated() ? "Logged in but no callback 2?" : "Logged out"
//     );
//   }
// });

// router.get("/profile", requiresAuth(), (req, res) => {
//   res.send(JSON.stringify(req.oidc.user));
//   return req.oidc.user;
// });


// // **users**
// // GET /all-users
// router.get('/all-users', requiresAuth(), getUsers);

// // GET /user/:id
// router.get('/user', requiresAuth(), getUser);

// // POST /user
// router.post('/create-user', requiresAuth(), createUser);

// // PUT /user/:id
// router.put('/modify-user', requiresAuth(), modifyUser);

// // DELETE /delete-user/:id
// router.delete('/delete-user', requiresAuth(), deleteUser);

// // **lists**
// // GET / all-lists
// router.get('/all-lists', getAllLists); //!! Need to require Auth()

// // GET /list/:id
// router.get('/list', getOneList); //!! Need to require Auth()

// // POST /list
// router.post('/create-list', createList); //!! Need to require Auth()

// // PUT /list/:id
// router.put('/modify-list', updateList); //!! Need to require Auth()

// // DELETE /list/:id
// router.delete('/delete-list', deleteList); //!! Need to require Auth()

// // **items**
// // GET /all-items
// router.get('/all-items', requiresAuth(), getAllItems);

// // GET /item/:id
// router.get('/item', requiresAuth(), getItem);

// // GET /all-items-label/:id
// router.get('/items-by-label', requiresAuth(), getItemsByLabel);

// // PUT /item/:id
// router.put('/modify-item', requiresAuth(), updateItem);

// // DELETE /item/:id
// router.delete('/modify-item', requiresAuth(), deleteItem);

// // **labels**
// // PUT /label/:id
// router.put('/modify-label', requiresAuth(),); //!! Needs Callback Function

module.exports = router;
