const User = require('../models/Users');

// take current Auth0 user and create a user for To Do App
const createUser = async (req, res) => {
  console.log("create user controller");
  let user = req.oidc.user;
  console.log(user.email)
};

const getUsers = async (req, res) => {
  console.log("get users controller");
  // let user = req.oidc.user;
  // console.log(user.email)
};

const getUser = async (req, res) => {
  console.log("get user controller");
  // let user = req.oidc.user;
  // console.log(user.email)
};

const modifyUser = async (req, res) => {
  console.log("modify user controller");
  // let user = req.oidc.user;
  // console.log(user.email)
};

const deleteUser = async (req, res) => {
  console.log("delete user controller");
  // let user = req.oidc.user;
  // console.log(user.email)
};

module.exports = { createUser, getUsers, getUser, modifyUser, deleteUser };

// **users**
// GET /all-users

// GET /user/:id

// POST /user
