// take current Auth0 user and create a user for To Do App
const createUser = async (req, res) => {
  console.log("create user controller");
  let user = req.oidc.user;
  console.log(user.email)
};

module.exports = { createUser };
